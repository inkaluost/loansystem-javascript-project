import React from 'react';
import {equipments} from '../data';
import { render } from "react-dom";
import matchSorter from "match-sorter";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

interface IEquipmentsState {
  equipments: any;
}


class Equipments extends React.Component<{}, IEquipmentsState> {

  constructor(){
    super()
    this.state ={
      data: equipments
    }
    }

  public render() {
      const { data } = this.state;
      return (
        <div>
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
                          filterAll: true
                  },
                  {
                    Header: "Equipment name",
                    id: "name",
                    accessor: d => d.name,
                    filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["name"] }),
                          filterAll: true
                  },
                  {
                    Header: "Description",
                    id: "description",
                    accessor: d => d.description,
                    filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["description"] }),
                          filterAll: true
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

export default Equipments;
