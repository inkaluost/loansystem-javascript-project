import React from 'react';
import {equipments} from '../data';
import { render } from "react-dom";

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
            columns={[
              {
                Header: "equipment",
                columns: [
                  {
                    Header: "equipment id",
                    accessor: "id"
                  },
                  {
                    Header: "equipment name",
                    accessor: "name"
                  },
                  {
                    Header: "Description",
                    accessor: "description"
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
