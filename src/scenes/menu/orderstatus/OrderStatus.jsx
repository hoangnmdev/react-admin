import { Box } from '@mui/material'
import Header from '~/scenes/dashboard/orderstatus/Header'
import Title from '~/scenes/dashboard/orderstatus/Title'
import Content from './content/Content'

function OrderStatus({ selectedTable, selectedItem, setSelectedItem }) {
  return (
    <Box
      width={'calc(100% - 1000px)'}
      bgcolor={'white'}
      height={'calc(100vh - 70px)'}
    >
      {/* Header */}
      <Header selectedTable={selectedTable} />
      {/* Title */}
      <Title selectedTable={selectedTable} />
      {/* Content */}
      <Content selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </Box>
  )
}

export default OrderStatus
