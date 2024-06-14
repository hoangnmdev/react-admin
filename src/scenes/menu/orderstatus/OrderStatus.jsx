import { Box } from '@mui/material'
import Header from '~/scenes/dashboard/orderstatus/Header'
import Title from '~/scenes/dashboard/orderstatus/Title'
import Content from './content/Content'

function OrderStatus({ selectedTable, selectedItem, setSelectedItem, subTotal, setSubTotal }) {
  return (
    <Box width={'calc(100% - 1000px)'} bgcolor={'white'} height={'calc(100vh - 70px)'}>
      <Header selectedTable={selectedTable} />
      <Title selectedTable={selectedTable} />
      <Content selectedItem={selectedItem} setSelectedItem={setSelectedItem} subTotal={subTotal} setSubTotal={setSubTotal} />
    </Box>
  )
}

export default OrderStatus
