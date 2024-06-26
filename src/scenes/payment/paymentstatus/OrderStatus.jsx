import { Box } from '@mui/material'
import Header from './Header'
import Title from './Title'
import Content from './Content'

function OrderStatus({ selectedTable, total, subTotal, selectedItem, setSelectedTable, setSelectedItem }) {
  return (
    <Box
      width={'calc(100% - 1000px)'}
      bgcolor={'white'}
      height={'calc(100vh - 70px)'}
    >
      {/*Header*/}
      <Header/>
      {/*Title*/}
      <Title selectedTable={selectedTable} total={total}/>
      {/*Content*/}
      <Content subTotal={subTotal} selectedItem={selectedItem} selectedTable={selectedTable} setSelectedTable={setSelectedTable} setSelectedItem={setSelectedItem}/>
    </Box>
  )
}

export default OrderStatus