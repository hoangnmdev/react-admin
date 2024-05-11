import { Box, Typography } from '@mui/material'
import { capitalizeLetter } from '~/utils/formatter'
import OrderList from './orderlist/OrderList'

const ORDER_LIST_TITLE = 'order list'
function Orders() {

  return (
    <Box
      width={'100%'}
    >
      <Box
        borderBottom= '2px solid rgba(0, 0, 0, 0.1)'
        borderTop= '2px solid rgba(0, 0, 0, 0.1)'
        bgcolor={'white'}
        height={'60px'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Box>
          <Typography
            fontSize={'25px'}
            fontWeight={'600'}
            p={'12px'}
            ml={'10px'}
          >
            {capitalizeLetter(ORDER_LIST_TITLE)}
          </Typography>
        </Box>
      </Box>
      <OrderList/>
    </Box>
   
  )
}

export default Orders