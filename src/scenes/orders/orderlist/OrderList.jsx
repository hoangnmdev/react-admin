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
  label_sl_no:'sl.no',
  label_total: 'Total',
  label_table_name: 'table',
  label_time:'Time',
  label_order_status_id: 'Order ID'
}
// Call the function and pass the LABEL object to capitalize the labels
const capitalizedLabel = capitalizeLabels(LABEL)

const columns = [
  { id: 'sl', label: capitalizedLabel.label_sl_no, minWidth: 170 },
  { id: 'total', label: capitalizedLabel.label_total, minWidth: 100 },
  { id: 'table', label: capitalizedLabel.label_table_name, minWidth: 100 },
  {
    id: 'time',
    label: capitalizedLabel.label_time,
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'orderId',
    label: capitalizedLabel.label_order_status_id,
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  }
]

function createData(sl, total, table, time, orderId) {
  return { sl, total, table, time, orderId }
}

const rows = [
  createData('India', 'IN', '1F', 1324171354, 3287263),
  createData('China', 'CN', '1F', 1403500365, 9596961),
  createData('Italy', 'IT', '1F', 60483973, 301340),
  createData('United States', 'US', '1F', 327167434, 9833520),
  createData('Canada', 'CA', '1F', 37602103, 9984670),
  createData('Australia', 'AU', '1F', 25475400, 7692024),
  createData('Germany', 'DE', '1F', 83019200, 357578),
  createData('Ireland', 'IE', '1F', 4857000, 70273),
  createData('Mexico', 'MX', '1F', 126577691, 1972550),
  createData('Japan', 'JP', '1F', 126317000, 377973),
  createData('France', 'FR', '1F', 67022000, 640679),
  createData('United Kingdom', 'GB', '1F', 67545757, 242495),
  createData('Russia', 'RU', '1F', 146793744, 17098246),
  createData('Nigeria', 'NG', '1F', 200962417, 923768),
  createData('Brazil', 'BR', '1F', 210147125, 8515767)
]

export default function OrderList() {
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
      <Paper sx={{ width: '100%', overflow: 'hidden',
        '&.MuiPaper-root': { boxShadow: 'none' },
        bgcolor: '#FAFAFA'
      }}>
        <TableContainer sx={{ height: 'calc(100vh - 60px - 70px - 100px)' }}>
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.total}>
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              fontWeight: '600',
                              textTransform: column.id === 'sl' ? 'uppercase' : 'lowercase',
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
