/* eslint-disable indent */
import { Box, useTheme } from '@mui/material'
// import { tokens } from '~/theme'
import TableList from './tablelist/TableList'
import OrderStatus from './orderstatus/OrderStatus'
const Dashboard = () => {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)

  return (
    <Box
    height={'calc(100vh - 70px)'}
    display={'flex'}
    borderTop= '2px solid rgba(0, 0, 0, 0.1)'
    >
     <TableList/>
     <OrderStatus/>
    </Box>
  )
}

export default Dashboard