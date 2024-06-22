/* eslint-disable no-console */
import { Box, IconButton, useTheme, Typography, InputBase } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { ColorModeContext, tokens } from '~/theme'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Profile from '~/components/Profile'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { displayCalendar } from '~/utils/calendar'
import { searchItem } from '~/apis/menu'
import { searchOrder } from '~/apis/order'
import { searchOrderByTable } from '~/apis/order'

function Topbar({ setFilteredMenuList, setSearchPerformed, setFilterOrderList }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const [currentTime, setCurrentTime] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeString = displayCalendar()
      setCurrentTime(timeString)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const handleSearch = async () => {
    if (!searchTerm.trim('')) {
      return
    }

    try {
      const isOrderSearch = Number(searchTerm)
      if (isOrderSearch) {
        const results = await searchOrder(searchTerm)
        console.log('results', results)
        setFilterOrderList(results)
      } if (!isOrderSearch) {
        const results = await searchItem(searchTerm)
        console.log('results', results)
        setFilteredMenuList(results)
      } if (!isOrderSearch) {
        const results = await searchOrderByTable(searchTerm)
        console.log('results', results)
        setFilterOrderList(results)
      }
      setSearchPerformed(true)
    } catch (error) {
      console.error('Error searching for item:', error)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Box display={'flex'} justifyContent={'space-between'} gap={'2'} padding={1.5} height={'70px'}>
      {/* SEARCH BAR */}
      <Box
        display={'flex'}
        marginLeft={'10px'}
        backgroundColor={colors.primary[900]}
        borderRadius={'5px'}
        height={'3rem'}
        width={'16rem'}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder='Search an item or any order...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <IconButton type='button' sx={{ p: 1 }} onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display={'flex'}>
        <Box display={'flex'} alignItems={'center'}>
          <CalendarTodayIcon />
          <Typography fontSize={'15px'} fontWeight={'600'} mr={'1.5rem'} ml={'0.25rem'}>
            {currentTime}
          </Typography>
        </Box>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <Profile />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
