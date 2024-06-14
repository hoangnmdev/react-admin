import MenuList from './menulist/MenuList'
import OrderStatus from './orderstatus/OrderStatus'
import { Box } from '@mui/material'

function Menu({ selectedTable, setSelectedTable, selectedItem, setSelectedItem, subTotal, setSubTotal, total, setTotal }) {
  return (
    <Box
      height={'calc(100vh - 70px)'}
      display={'flex'}
      borderTop= '2px solid rgba(0, 0, 0, 0.1)'
    >
      <MenuList selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      <OrderStatus selectedTable={selectedTable} setSelectedTable={setSelectedTable}
        selectedItem={selectedItem} setSelectedItem={setSelectedItem}
        subTotal={subTotal} setSubTotal={setSubTotal}
        total={total} setTotal={setTotal}
      />
    </Box>
  )
}

export default Menu