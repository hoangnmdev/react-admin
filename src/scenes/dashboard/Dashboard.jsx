import { Box } from '@mui/material'
import TableList from './tablelist/TableList'
import OrderStatus from './orderstatus/OrderStatus'

const Dashboard = ({ selectedTable, setSelectedTable, selectedItem }) => {
  return (
    <Box
      height={'calc(100vh - 70px)'}
      display={'flex'}
      borderTop='2px solid rgba(0, 0, 0, 0.1)'
    >
      <TableList setSelectedTable={setSelectedTable} selectedTable={selectedTable} />
      <OrderStatus selectedTable={selectedTable} selectedItem={selectedItem}/>
    </Box>
  )
}

export default Dashboard
