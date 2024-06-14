import { Box } from '@mui/material'
import OrderCard from './OrderCard'
import Price from './Price'

function Content({ selectedItem, setSelectedItem, subTotal, setSubTotal, total, setTotal, selectedTable, setSelectedTable }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <OrderCard selectedItem={selectedItem} setSelectedItem={setSelectedItem} setSubTotal={setSubTotal} total={total}/>
      <Price subTotal={subTotal} total={total} setTotal={setTotal} selectedTable={selectedTable} setSelectedTable={setSelectedTable}/>
    </Box>
  )
}

export default Content
