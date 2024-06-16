/* eslint-disable indent */
import { Box } from '@mui/material'
// import { tokens } from '~/theme'
import TableList from './paymentlist/PaymentList'
import OrderStatus from './paymentstatus/OrderStatus'
const Payment = ({ selectedTable, selectedItem, total, subTotal }) => {
  return (
    <Box
    height={'calc(100vh - 70px)'}
    display={'flex'}
    borderTop= '2px solid rgba(0, 0, 0, 0.1)'
    >
     <TableList selectedTable={selectedTable} selectedItem={selectedItem}/>
     <OrderStatus selectedTable={selectedTable} total={total} subTotal={subTotal}/>
    </Box>
  )
}

export default Payment