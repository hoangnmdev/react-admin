import { Box } from '@mui/material'
import OrderCard from './OrderCard'
import Price from './Price'

function Content({ selectedItem, setSelectedItem, subTotal, setSubTotal,
  total, setTotal, selectedTable, setSelectedTable, subTotalItem, setSubTotalItem }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <OrderCard selectedItem={selectedItem} setSelectedItem={setSelectedItem} selectedTable={selectedTable}
        setSubTotal={setSubTotal} total={total} subTotalItem={subTotalItem} setSubTotalItem={setSubTotalItem}/>
      <Price subTotal={subTotal} total={total} setTotal={setTotal} selectedTable={selectedTable} setSelectedTable={setSelectedTable}
        setSelectedItem={setSelectedItem} selectedItem={selectedItem}
      />
    </Box>
  )
}

export default Content
