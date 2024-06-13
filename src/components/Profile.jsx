import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Logout from '@mui/icons-material/Logout'
import PersonAdd from '@mui/icons-material/PersonAdd'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import { useNavigate } from 'react-router-dom'
import AlertDialog from './AlertDialog'

function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOnClick = () => {
    navigate('/login')
  }
  const handleDialogOpen = () => {
    setDialogOpen(true)
    handleClose()
  }
  const handleDialogClose = () => {
    setDialogOpen(false)
  }
  return (
    <Box>

      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'basic-menu-profile' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <PersonOutlinedIcon/>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem >
          <Avatar sx={{ height:28, width: 28, mr:2 }}/> Profile
        </MenuItem>
        <MenuItem >
          <Avatar sx={{ height:28, width: 28, mr:2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleOnClick}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleDialogOpen}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <AlertDialog open={dialogOpen} handleClose={handleDialogClose}
        title={'Log out?'} contentText={'Do you want to log out?'}
        cancelLabel={'Cancel'} confirmLabel={'Log out'} handleConfirm={handleOnClick} />
    </Box>
  )
}

export default Profile