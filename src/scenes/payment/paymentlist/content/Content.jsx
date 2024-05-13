import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { Box, Typography } from '@mui/material'
import { capitalizeLabels } from '~/utils/formatter'

const LABEL = {
  label_item:'Item',
  label_price: 'Price',
  label_quantity:'Quantity',
  label_subtotal: 'Subtotal'
}
// Call the function and pass the LABEL object to capitalize the labels
const capitalizedLabel = capitalizeLabels(LABEL)

const columns = [
  { id: 'item', label: capitalizedLabel.label_item, minWidth: 170 },
  { id: 'price', label: capitalizedLabel.label_price, minWidth: 100 },
  {
    id: 'quantity',
    label: capitalizedLabel.label_quantity,
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'subtotal',
    label: capitalizedLabel.label_subtotal,
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  }
]

function createData(item, price, quantity, subtotal) {
  const density = quantity / subtotal
  return { item, price, quantity, subtotal, density }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]

export default function Content() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <Box alignItems={'center'} justifyContent={'center'} display={'flex'}>
      <Paper sx={{ width: '800px', overflow: 'hidden',
        '&.MuiPaper-root': { boxShadow: 'none' },
        bgcolor: '#FAFAFA'
      }}>
        <TableContainer sx={{ height: '350px' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ '& .MuiTableCell-head': { backgroundColor: '#F1F2EB' } }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {/**Column label value */}
                    <Typography variant="h6" color="initial" fontWeight={'600'}>{column.label}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.price}>
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              fontWeight: '600',
                              textTransform: column.id === 'item' ? 'uppercase' : 'lowercase',
                              fontSize: '15px'
                            }}
                          >
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}