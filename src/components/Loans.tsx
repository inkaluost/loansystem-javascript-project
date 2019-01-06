import React from 'react';
import {loans} from '../data';
import { render } from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter'
import Button from '@material-ui/core/Button';

interface ILoansState {
  loans: any;
}


class Loans extends React.Component<{}, ILoansState> {


  constructor(){
    super()
    this.state ={
      data: loans
    };
    this.renderEditable = this.renderEditable.bind(this);

    }

      deleteRow(id) {

      const index = loans.findIndex(loans=>{
        return loans.id === id
      })
      if (window.confirm("Do you want to remove this row?")){
        loans.splice(index, 1)
        this.setState({ loans })

      }
      }

      addRow(){
        const newData = { id: 'ID', equipmentId: 'EQUIPMENT ID', userId: 'USER ID', begins: 'BEGINS', ends: 'ENDS', returned: 'RETURNED' };
        loans.push(newData);
        this.setState({ loans });
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
                Header: "loans ",
                columns: [
                  {
                    Header: "Equipment",
                    id: "equipmentId",
                    accessor: d => d.equipmentId,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["equipmentId"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  },
                  {
                    Header: " User ",
                    id: "id",
                    accessor: d => d.id,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["id"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  },
                  {
                    Header: "Begins",
                    id: "begins",
                    accessor: d => d.begins,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["begins"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  },
                  {
                    Header: "Ends",
                    id: "ends",
                    accessor: d => d.ends,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ends"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  },
                  {
                    Header: "Returned",
                    id: "returned",
                    accessor: d => d.returned,
                    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["returned"] }),
                    filterAll: true,
                    Cell: this.renderEditable
                  },
                  {

                    Cell: props=>{
                      return(
                        <Button

                        onClick={() =>{
                          this.deleteRow(props.original.id);
                        }}
                        >Delete</Button>
                      )
                    }
                  }

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

export default Loans;
