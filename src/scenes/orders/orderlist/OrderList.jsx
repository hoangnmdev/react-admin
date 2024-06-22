/* eslint-disable no-console */
import { useEffect, useState } from 'react'
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
import { fetchOrders } from '~/apis/order'

const LABEL = {
  label_sl_no: 'Order ID',
  label_total: 'Total',
  label_table_name: 'Table',
  label_time: 'Time',
  label_order_status_id: 'Order Number'
}

const capitalizedLabel = capitalizeLabels(LABEL)

const columns = [
  { id: 'orderId', label: capitalizedLabel.label_sl_no, minWidth: 170 },
  { id: 'total', label: capitalizedLabel.label_total, minWidth: 100, format: (value) => value },
  { id: 'tableName', label: capitalizedLabel.label_table_name, minWidth: 100 },
  {
    id: 'time',
    label: capitalizedLabel.label_time,
    minWidth: 100,
    align: 'right'
  },
  {
    id: 'orderNumber',
    label: capitalizedLabel.label_order_status_id,
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US')
  }
]

export default function OrderList({ FilterOrderList, searchPerformed, setSearchPerformed }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [rows, setRows] = useState([])
  const [defaultOrderList, setDefaultOrderList] = useState([])

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const fetchedOrders = await fetchOrders()
        setRows(fetchedOrders)
        setDefaultOrderList(fetchedOrders)
        console.log('Fetched orders:', fetchedOrders)
      } catch (error) {
        console.error('Error fetching orders:', error)
        setRows([])
        setSearchPerformed(false)
      }
    }
    fetchOrder()
  }, [setSearchPerformed])

  useEffect(() => {
    console.log('Effect triggered:', { searchPerformed, FilterOrderList, defaultOrderList })
    if (searchPerformed && FilterOrderList.length > 0) {
      console.log('Setting rows to FilterOrderList:', FilterOrderList)
      setRows(FilterOrderList)
    } else {
      console.log('Setting rows to defaultOrderList:', defaultOrderList)
      setRows(defaultOrderList)
    }
  }, [FilterOrderList, defaultOrderList, searchPerformed])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Box alignItems={'center'} justifyContent={'center'} display={'flex'}>
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          '&.MuiPaper-root': { boxShadow: 'none' },
          bgcolor: '#FAFAFA'
        }}
      >
        <TableContainer sx={{ height: 'calc(100vh - 60px - 70px - 100px)' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ '& .MuiTableCell-head': { backgroundColor: '#F1F2EB' } }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    <Typography variant="h6" color="initial" fontWeight={'600'}>
                      {column.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {searchPerformed && FilterOrderList.length === 0 && defaultOrderList.length > 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
        No orders found.
                  </TableCell>
                </TableRow>
              ) : (
                rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.orderId}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            fontWeight: '600',
                            textTransform: column.id === 'orderId' ? 'uppercase' : 'lowercase',
                            fontSize: '15px'
                          }}
                        >
                          {column.format && typeof value === 'string' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))
              )}
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
