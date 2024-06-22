/* eslint-disable no-console */
import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { capitalizeLetter } from '~/utils/formatter'
import OrderList from './orderlist/OrderList'
import { fetchOrders } from '~/apis/order'

const ORDER_LIST_TITLE = 'order list'
const GET_ALL_ORDER = 'get all order'

function Orders({ FilterOrderList, setFilterOrderList, searchPerformed, setSearchPerformed }) {
  const [loading, setLoading] = useState(false)

  const handleFetchAllOrders = async () => {
    setLoading(true)
    try {
      const allOrders = await fetchOrders()
      setFilterOrderList(allOrders)
      setSearchPerformed(true) // Assuming this should trigger the searchPerformed state to true
    } catch (error) {
      console.error('Error fetching all orders:', error)
      setFilterOrderList([]) // Set to empty array or handle error state
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box width={'100%'}>
      <Box
        borderBottom="2px solid rgba(0, 0, 0, 0.1)"
        borderTop="2px solid rgba(0, 0, 0, 0.1)"
        bgcolor={'white'}
        height={'60px'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Box>
          <Typography fontSize={'25px'} fontWeight={'600'} p={'12px'} ml={'10px'}>
            {capitalizeLetter(ORDER_LIST_TITLE)}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mr={'25px'}>
          <Button
            disabled={loading}
            onClick={handleFetchAllOrders}
            sx={{
              ml:'30px',
              '&.MuiButton-containedPrimary': {
                bgcolor: '#E3E1D9',
                boxShadow: 'none',
                borderRadius: '10px',
                willChange: 'transform',
                '&:hover':{
                  bgcolor: '#4F6F52',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                  transform: 'translateY(-2px)',
                  '& .MuiTypography-root': {
                    color: 'white'
                  },
                  '&:active': {
                    boxShadow: 'none',
                    transform: 'translateY(0)'
                  }
                }
              }
            }} variant="contained"
          >
            <Typography sx={{
              fontSize: '14px',
              color: '#A9A9A9',
              '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
            }}
            color="white">
              {capitalizeLetter(GET_ALL_ORDER)}
            </Typography>
          </Button>
        </Box>
      </Box>
      <OrderList
        FilterOrderList={FilterOrderList}
        setFilterOrderList={setFilterOrderList}
        searchPerformed={searchPerformed}
        setSearchPerformed={setSearchPerformed}
      />
    </Box>
  )
}

export default Orders
