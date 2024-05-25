import { Box } from '@mui/material'
import TableList from './tablelist/TableList'
import OrderStatus from './orderstatus/OrderStatus'
import { useState } from 'react'

const Dashboard = () => {
  const [selectedTable, setSelectedTable] = useState(null) // State to store selected table details

  return (
    <Box
      height={'calc(100vh - 70px)'}
      display={'flex'}
      borderTop='2px solid rgba(0, 0, 0, 0.1)'
    >
      <TableList setSelectedTable={setSelectedTable} selectedTable={selectedTable} />
      <OrderStatus selectedTable={selectedTable} />
    </Box>
  )
}

export default Dashboard
