import { Box, Typography } from '@mui/material'
import TableBarIcon from '@mui/icons-material/TableBar'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { capitalizeLetter } from '~/utils/formatter'
import { useEffect, useState } from 'react'
import { displayTime } from '~/utils/time'

const ORDER_TITLE = 'order#:'
const ORDER_TABLE_TITLE = 'table:'
const ORDER_TIME_TITLE = 'time:'

function Header({ selectedTable }) {
  const [currentTime, setCurrentTime] = useState('')
  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeString = displayTime() // Call the displayCalendar function to get the time string
      setCurrentTime(timeString) // Update the state with the current time
    }, 1000)
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Box
      bgcolor={'white'}
      height={'60px'}
      display={'flex'}
      justifyContent={'space-between'}
      p={'0px 12px 0px 0px'}
      sx={{ borderBottom: '2px solid rgba(0, 0, 0, 0.1)' }}
      alignItems={'center'}
    >
      <Box>
        <Typography fontSize={'25px'} ml={'10px'} display={'inline'}>{capitalizeLetter(ORDER_TITLE)}</Typography>
        <Typography fontSize={'25px'} display={'inline'} ml={'5px'}>{selectedTable ? `${selectedTable.orderNumber}` : ''}</Typography>
      </Box>
      <Box display={'flex'}>
        <Box display={'flex'} alignItems={'center'}>
          <TableBarIcon sx={{ fontSize: '20px' }}/>
          <Typography fontSize={'15px'} color="initial" ml={'5px'} fontWeight={'600'}>{capitalizeLetter(ORDER_TABLE_TITLE)}</Typography>
          <Typography fontSize={'22px'} fontWeight={'600'} ml={'5px'} color={'#F0B86E'}>{selectedTable ? `${selectedTable.tableId}` : ''}</Typography>
        </Box>
        <Box ml={'15px'} display={'flex'} alignItems={'center'}>
          <AccessTimeIcon sx={{ fontSize: '20px' }}/>
          <Typography fontSize={'15px'} color="initial" ml={'5px'} fontWeight={'600'}>{capitalizeLetter(ORDER_TIME_TITLE)}</Typography>
          <Typography fontSize={'22px'} fontWeight={'600'} ml={'5px'} color={'#F0B86E'}>{currentTime}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Header