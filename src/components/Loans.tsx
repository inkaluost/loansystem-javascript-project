import React from 'react';
import {loans} from '../data';
import { render } from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";

interface ILoansState {
  loans: any;
}


class Loans extends React.Component<{}, ILoansState> {

  
  constructor(){
    super()
    this.state ={
      data: loans
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
                Header: "loans ",
                columns: [
                  {
                    Header: "equipment id",
                    accessor: "id"
                  },
                  {
                    Header: " user id",
                    accessor: "id"
                  },
                  {
                    Header: "Begins",
                    accessor: "begins"
                  },
                  {
                    Header: "Ends",
                    accessor: "ends"
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
