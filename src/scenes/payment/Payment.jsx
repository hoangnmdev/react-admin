/* eslint-disable indent */
import { Box } from '@mui/material'
// import { tokens } from '~/theme'
import PaymentList from './paymentlist/PaymentList'
import OrderStatus from './paymentstatus/OrderStatus'
const Payment = ({ selectedTable, setSelectedTable, selectedItem, setSelectedItem, total, subTotal }) => {
  return (
    <Box
    height={'calc(100vh - 70px)'}
    display={'flex'}
    borderTop= '2px solid rgba(0, 0, 0, 0.1)'
    >
     <PaymentList selectedTable={selectedTable} setSelectedTable={setSelectedTable} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
     <OrderStatus selectedTable={selectedTable} total={total}
     subTotal={subTotal} selectedItem={selectedItem}
     setSelectedTable={setSelectedTable} setSelectedItem={setSelectedItem}/>
    </Box>
  )
}

export default Payment