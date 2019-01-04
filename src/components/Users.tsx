import React from 'react';
import {users} from '../data';
import { render } from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";


interface IUsersState {
  users: any;
}


class Users extends React.Component<{}, IUsersState> {

  constructor(){
    super()
    this.state ={
      data: users
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
        Header: "users ",
        columns: [
          {
            Header: " User id",
            accessor: "id"
          },
          {
            Header: " user name",
            accessor: "name"
          },
          {
            Header: "user email",
            accessor: "email"
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

export default Users;
