import { Box, useTheme, Typography } from '@mui/material'
import TableBarIcon from '@mui/icons-material/TableBar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import Header from './Header'
import Title from './Title'
import Content from './Content'

function OrderStatus() {
  return (
    <Box
      width={'calc(100% - 1000px)'}
      bgcolor={'white'}
      height={'calc(100vh - 70px)'}
    >
      {/*Header*/}
      <Header/>
      {/*Title*/}
      <Title/>
      {/*Content*/}
      <Content/>
    </Box>
  )
}

export default OrderStatus