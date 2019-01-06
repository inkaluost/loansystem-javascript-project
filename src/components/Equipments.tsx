import React from 'react';
import {equipments} from '../data';
import { render } from "react-dom";
import matchSorter from "match-sorter";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from '@material-ui/core/Button';

interface IEquipmentsState {
  equipments: any;
}


class Equipments extends React.Component<{}, IEquipmentsState> {

  constructor(){
    super()
    this.state ={
      data: equipments
    }


    this.renderEditable = this.renderEditable.bind(this);
  }



  deleteRow(id) {
    console.log("Pressed");
  const index = equipments.findIndex(equipment=>{
    return equipment.id === id
  })
  if (window.confirm("Do you want to remove this row?")){
    equipments.splice(index, 1)
    this.setState({ equipments })
  }
  }

  addRow(){
    const newData = { id: 'ID', name: 'NAME', description: 'DESCRIPTION'};
    equipments.push(newData);
    this.setState({ equipments });
  }


  renderEditable(cellInfo) {
    return (
      <div
     style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  public render() {
      const { data } = this.state;
      return (
        <div>
        <Button onClick={() =>{ this.addRow();}}>
        ADD NEW
        </Button>
          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
            columns={[
              {
                Header: "Equipment ",
                columns: [
                  {
                    Header: "Equipment id" ,
                    id: "id",
                    accessor: d => d.id,
                    filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["id"] }),
                          filterAll: true,
                    Cell: this.renderEditable
                  },

                  {
                    Header: "Equipment name",
                    id: "name",
                    accessor: d => d.name,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["name"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  },
                  {
                    Header: "Description",
                    id: "description",
                    accessor: d => d.description,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["description"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  },
                  //muokkaa
                  {
                    Header: "Actions",
                    Cell: props=>{
                      return(
                        <Button className=""
                        onClick={() =>{
                          this.deleteRow(props.original.id);
                        }}
                        >Delete</Button>
                      )
                    }
                  }
                  //älä ylitä
                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />

        </div>
      );
    }
  }

export default Equipments;
