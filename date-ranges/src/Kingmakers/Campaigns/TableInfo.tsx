import * as React from 'react'
import { 
  lighten,
  styled,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import {
  Font,
} from ".."

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: lighten(theme.palette.primary.main, 0.925),
  },
}))

export default function TableInfo() {

  return (
    <TableHead>
        <TableRow>
          <StyledTableCell>
            <Font variant="title">
              CAMPAIGN
            </Font>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Font variant="title">
              FROM
              </Font>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Font variant="title">
              TO
              </Font>
          </StyledTableCell>
          <StyledTableCell align="left">
            <Font variant="title" align="left">
              STATUS
              </Font>
          </StyledTableCell>
          <StyledTableCell align="right">
            <Font variant="title" align="right">
              BUDGET
              </Font>
          </StyledTableCell>
        </TableRow>
      </TableHead>
  )
}
