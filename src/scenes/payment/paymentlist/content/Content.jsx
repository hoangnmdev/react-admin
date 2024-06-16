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
  label_item: 'Item',
  label_price: 'Price',
  label_quantity: 'Quantity',
  label_subtotal: 'Subtotal'
}

const capitalizedLabel = capitalizeLabels(LABEL)

const columns = [
  { id: 'item', label: capitalizedLabel.label_item, minWidth: 170 },
  { id: 'price', label: capitalizedLabel.label_price, minWidth: 100 },
  {
    id: 'quantity',
    label: capitalizedLabel.label_quantity,
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'subtotal',
    label: capitalizedLabel.label_subtotal,
    minWidth: 170,
    align: 'right'
  }
]

export default function Content({ selectedItem }) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (_event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const rows = selectedItem.map(item => ({
    item: item.itemName,
    price: `${item.price}Đ`,
    quantity: item.quantity,
    subtotal: `${item.totalPrice}Đ`
  }))

  return (
    <Box alignItems={'center'} justifyContent={'center'} display={'flex'}>
      <Paper
        sx={{
          width: '800px',
          overflow: 'hidden',
          '&.MuiPaper-root': { boxShadow: 'none' },
          bgcolor: '#FAFAFA'
        }}
      >
        <TableContainer sx={{ height: '350px' }}>
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
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
                        {value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
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
