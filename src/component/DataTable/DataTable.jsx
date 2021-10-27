import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { Card } from '@mui/material';

const DataTable = (props) => {
  const { trainees, id, column } = props;
  return (
    <TableContainer sx={{ width: 'auto', margin: '30px' }} component={Card}>
      <Table>
        <TableHead>
          {column.map((row) => (
            <TableCell align={row.align} component="tr" scope="column">
              <b>{row.label}</b>
            </TableCell>
          ))}
        </TableHead>
        <TableBody id={id}>
          {trainees.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="tr" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell component="tr" align="left">
                {row.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

DataTable.propTypes = {
  trainees: PropTypes.objectOf.isRequired,
  id: PropTypes.string.isRequired,
  column: PropTypes.objectOf.isRequired,
};