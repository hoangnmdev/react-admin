import MenuList from './menulist/MenuList'
import OrderStatus from './orderstatus/OrderStatus'
import { Box } from '@mui/material'

function Menu({ selectedTable }) {
  return (
    <Box
      height={'calc(100vh - 70px)'}
      display={'flex'}
      borderTop= '2px solid rgba(0, 0, 0, 0.1)'
    >
      <MenuList/>
      <OrderStatus selectedTable={selectedTable}/>
    </Box>
  )
}

export default Menu