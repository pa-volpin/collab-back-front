import React from 'react'
import PropTypes from 'prop-types'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container
} from '@material-ui/core';

import {withStyles , makeStyles} from '@material-ui/core/styles';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
}))(TableRow);

const useStyles = makeStyles({
  table: {
    margin: "auto auto",
    textAlign: "center",
    minWidth: "auto",
    maxWidth: "980px",
  }
})

const TableContent = (props) => {
  const classes = useStyles()
  const { data, deleteData } = props
  return (
    <TableContainer className={classes.table}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>            
            <StyledTableCell align="center">Gasto</StyledTableCell>
            <StyledTableCell align="center">Valor</StyledTableCell>
            <StyledTableCell align="center">Editar / Deletar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map((row, index) => {
            const { _id, title, valor } = row;
            return (
              <StyledTableRow key={index} >
                <StyledTableCell align="center">{title}</StyledTableCell>
                <StyledTableCell align="center">{valor}</StyledTableCell>
                <StyledTableCell align="center">
                  <button>
                    Edt
                  </button>
                  <button onClick={ () => deleteData(_id) }>
                    Del
                  </button>
                </StyledTableCell>

              </StyledTableRow>
            )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );

  
}

TableContent.propTypes = {

}

export default TableContent

