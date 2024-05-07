/* eslint-disable indent */
import { Box, useTheme } from '@mui/material'
// import { tokens } from '~/theme'
import TableList from './tablelist/TableList'
import Order from './orderdescription/Order'

const Dashboard = () => {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)

  return (
    <Box height={'calc(100vh - 70px)'} display={'flex'}>
     <TableList/>
    <Order/>
    </Box>
  )
}

export default Dashboard