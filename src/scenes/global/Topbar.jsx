import { Box, IconButton, useTheme, Typography } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Profile from '~/components/Profile'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { displayCalendar } from '~/utils/calendar'
import { useState, useEffect } from 'react'

function Topbar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // Step 2: Use  the Context
  const colorMode = useContext(ColorModeContext)
  const [currentTime, setCurrentTime] = useState('')

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeString = displayCalendar() // Call the displayCalendar function to get the time string
      setCurrentTime(timeString) // Update the state with the current time
    }, 1000)
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Box display={'flex'}
      justifyContent={'space-between'}
      gap={'2'}
      padding={1.5}
      height={'70px'}>
      {/*SEARCH BAR */}
      <Box
        display={'flex'}
        marginLeft={'10px'}
        backgroundColor = {colors.primary[900]}
        borderRadius={'5px'}
        height={'3rem'}
        width={'16rem'}
      >
        < InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search product or any order...'/>
        <IconButton type='button' sx={{ p:1 }}>
          <SearchIcon/>
        </IconButton>
      </Box>

      {/*ICONS */}
      <Box display={'flex'} >
        <Box
          display={'flex'}
          alignItems={'center'}
        >
          <CalendarTodayIcon/>
          <Typography fontSize={'15px'} fontWeight={'600'} mr={'1.5rem'} ml={'0.25rem'}>{currentTime}</Typography>
        </Box>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <Profile/>
        </IconButton>
      </Box>
    </Box>
  )
}


export default Topbar