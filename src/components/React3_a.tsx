import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {maat} from './Countries';
console.log ('MAAT',maat)
import Country from './Country';

interface ICountriesState {
}


class React3_a extends React.Component<{}, ICountriesState> {
  public render() {
    return (
        <Paper>
          <h1>React3_a</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Population
                </TableCell>
                <TableCell>
                  Percentage
                </TableCell>
                <TableCell>
                  Position
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maat.map(country => <Country prop1={country} />)}
            </TableBody>
          </Table>
        </Paper>
    )
  };
}

export default React3_a;
