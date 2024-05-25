import { Box } from '@mui/material'
import Header from './Header'
import Title from './Title'
import Content from './Content'

function OrderStatus({ selectedTable }) {
  return (
    <Box
      width={'calc(100% - 1000px)'}
      bgcolor={'white'}
      height={'calc(100vh - 70px)'}
    >
      {/* Header */}
      <Header />
      {/* Title */}
      <Title selectedTable={selectedTable} />
      {/* Content */}
      <Content />
    </Box>
  )
}

export default OrderStatus
