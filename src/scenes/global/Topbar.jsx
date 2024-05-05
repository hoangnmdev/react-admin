import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import Profile from './Profile'

function Topbar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // Step 2: Use  the Context
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display={'flex'} justifyContent={'space-between'} gap={'2'} padding={1.5}>
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
      <Box display={'flex'}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon/>)
            : (<LightModeOutlinedIcon/>)}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <Profile/>
        </IconButton>
      </Box>
    </Box>
  )
}


export default Topbar