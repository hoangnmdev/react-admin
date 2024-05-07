import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Floor({ onFloorSelect }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [selectedFloor, setSelectedFloor] = React.useState('First floor') // State to track selected floor
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleFloorSelect = (floor) => {
    setAnchorEl(null)
    // Call the function passed as a prop
    setSelectedFloor(floor) // Update selected floor
    onFloorSelect(floor)
  }
  return (
    <Box p={'15px'}>
      {/**Button to drop floor menu */}
      <Button
        sx={{
          mr:'10px',
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#D8AE7E',
            boxShadow: 'none',
            width: '150px'
          }
        }}
        variant="contained"
        id="basic-button-floor"
        aria-controls={open ? 'basic-menu-workspace' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon sx={{ color: 'black' }}/>}
      >
        <Typography sx={{
          fontSize: '15px',
          '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
        }}
        color="initial">
          {selectedFloor}
        </Typography>
      </Button>
      {/**Drop floor menu */}
      <Menu
        id="floor-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-workspace'
        }}
      >
        {/* Call the handleFloorSelect function with floor name */}
        <MenuItem
          onClick={() => handleFloorSelect('First floor')}
          sx={{ bgcolor:'white' }}>
          <Button sx={{
            width: '120px',
            height: '20px',
            '&.MuiButton-root': { pointerEvents:'none' }
          }}>
            <Typography sx={{
              fontSize: '15px',
              '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
            }}
            color="initial">
        First floor
            </Typography>
          </Button>
        </MenuItem>
        {/* Call the handleFloorSelect function with floor name */}
        <MenuItem
          onClick={() => handleFloorSelect('Second floor')}
          sx={{
            bgcolor: 'white',
            borderTop: '2px solid rgba(0, 0, 0, 0.1)'
          }}>
          <Button sx={{
            width: '120px',
            height: '20px',
            '&.MuiButton-root': { pointerEvents:'none' }
          }}>
            <Typography sx={{
              fontSize: '15px',
              '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
            }}
            color="initial">
        Second floor
            </Typography>
          </Button>
        </MenuItem>
      </Menu>

    </Box>
  )
}

export default Floor