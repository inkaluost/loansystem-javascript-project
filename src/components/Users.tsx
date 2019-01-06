import React from 'react';
import {users} from '../data';
import { render } from 'react-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter';
import Button from '@material-ui/core/Button';


interface IUsersState {
  users: any;
}


class Users extends React.Component<{}, IUsersState> {

  constructor(){
    super()
    this.state ={
      data: users
    }
    this.renderEditable=this.renderEditable.bind(this);
    }
    deleteRow(id) {

    const index = users.findIndex(users=>{
      return users.id === id
    })
    if (window.confirm("Do you want to remove this row?")){
      users.splice(index, 1)
      this.setState({ users })

    }
    }

    addRow(){
      const newData = { id: 'ID', name: 'NAME', email: 'EMAIL'};
      users.push(newData);
      this.setState({ users });
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
        Header: "users ",
        columns: [
          {
            Header: " User id",
            id: "id",
            accessor: d => d.id,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["id"] }),
            filterAll: true,
            Cell: this.renderEditable

          },
          {
            Header: " user name",
            id: "name",
            accessor: d => d.name,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["name"] }),
            filterAll: true,
            Cell: this.renderEditable

          },
          {
            Header: "user email",
            id: "email",
            accessor: d => d.email,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["email"] }),
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

export default Users;
