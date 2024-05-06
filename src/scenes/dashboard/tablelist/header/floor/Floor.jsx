import React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Floor() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box p={'15px'}>
      {/**Button to drop floor menu */}
      <Button
        sx={{
          mr:'10px',
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#F3CA52',
            boxShadow: 'none',
            width: '130px'
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
        Floor Menu
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
        <MenuItem>
          <Button sx={{ width: '100px', height: '20px' }}>
            <Typography sx={{
              fontSize: '15px',
              '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
            }}
            color="initial">
        First floor
            </Typography>
          </Button>
        </MenuItem>
        {/** customed horizontal line  */}
        <hr style={{
          border: 0,
          height: 0,
          borderTop: '2px solid rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
        }}/>
        <MenuItem>
          <Button sx={{ width: '100px', height: '20px' }}>
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