import { Box } from '@mui/material'
import OrderCard from './OrderCard'
import Price from './Price'

function Content({ selectedItem, setSelectedItem, subTotal, setSubTotal }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <OrderCard selectedItem={selectedItem} setSelectedItem={setSelectedItem} setSubTotal={setSubTotal} />
      <Price subTotal={subTotal}/>
    </Box>
  )
}

export default Content
