import { Box, Button, Typography } from '@mui/material'
import TableBarIcon from '@mui/icons-material/TableBar'
import { useState } from 'react'
import SnackBarAlert from '~/components/SnackBarAlert'
import { capitalizeLetter } from '~/utils/formatter'
import { useNavigate } from 'react-router-dom'

const TABLE_TITLE = 'table:'

function Footer({ selectedTable }) {
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const navigate = useNavigate()
  const handleButtonClick = () => {
    if (!selectedTable) {
      setOpenSnackBar(true)
    } else {
      navigate('/menu')
    }
  }

  const handleSnackBarClose = () => {
    setOpenSnackBar(false)
  }

  return (
    <Box
      bgcolor={'white'}
      height={'calc(100vh - 70px - 60px - 400px)'}
      display={'flex'}
      justifyContent={'space-between'}
      sx={{ borderTop: '2px solid rgba(0, 0, 0, 0.1)' }}
    >
      {/**Table and Guest Quantity in Footer*/}
      <Box
        display={'flex'}
        p={'30px 0px 0px 15px'}
        width={'220px'}
        height={'40px'}
      >
        <Box display={'flex'} alignItems={'center'} mr={'40px'}>
          <TableBarIcon sx={{ fontSize: '20px', mr: '10px' }} />
          <Typography fontSize={'15px'} color="initial">
            {capitalizeLetter(TABLE_TITLE)}
          </Typography>
          <Typography
            fontWeight={'600'}
            fontSize={'22px'}
            color={'#F0B86E'}
            ml={'5px'}>
            {selectedTable ? `${selectedTable.tableId}` : ''}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: '15px 15px 0px 0px' }}>
        {/** Select and Continue Button */}
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#4F6F52'
            },
            boxShadow: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '16px 24px',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
            userSelect: 'none',
            width: '100%',
            willChange: 'transform',
            '&:disabled': {
              pointerEvents: 'none'
            },
            '&:hover': {
              boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
              transform: 'translateY(-2px)'
            },
            '&:active': {
              boxShadow: 'none',
              transform: 'translateY(0)'
            }
          }}
          variant="contained"
          onClick={handleButtonClick}
        >
          <Typography sx={{
            fontSize: '14px',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
            SELECT AND CONTINUE
          </Typography>
        </Button>
      </Box>
      {/* Snackbar for notification */}
      <SnackBarAlert open={openSnackBar} onClose={handleSnackBarClose} message={'Please select the table before proceeding.'}/>
    </Box>
  )
}

export default Footer
