import { Box } from '@mui/material'
import OrderCard from './OrderCard'
import Price from './Price'

function Content({ selectedItem, setSelectedItem }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <OrderCard selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <Price />
    </Box>
  )
}

export default Content
