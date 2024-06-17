import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import AlertDialog from '~/components/AlertDialog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function Footer({ setSelectedTable, setSelectedItem }) {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const handleCancelDialogClose = () => {
    setCancelDialogOpen(false)
  }

  const handleConfirmCancel = () => {
    navigate('/dashboard')
    setSelectedTable(null)
    setSelectedItem([])
    handleCancelDialogClose()
    enqueueSnackbar('Order cancel succesfully!', { variant: 'success' })
  }

  const handleCancelDialogOpen = () => {
    setCancelDialogOpen(true) // Open the cancel dialog
  }

  return (
    <Box
      bgcolor={'white'}
      height={'calc(100vh - 70px - 60px - 400px)'}
      display={'flex'}
      sx={{ borderTop: '2px solid rgba(0, 0, 0, 0.1)' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Button onClick={handleCancelDialogOpen}
        sx={{
          '&.MuiButton-containedPrimary': {
            bgcolor: '#FF6868',
            boxShadow: 'none',
            width: '800px',
            height: '70px',
            borderRadius: '10px',
            willChange: 'transform',
            '&:hover': {
              boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
              transform: 'translateY(-2px)',
              '&:active': {
                boxShadow: 'none',
                transform: 'translateY(0)'
              }
            }
          }
        }} variant="contained">
        <Typography sx={{
          fontSize: '20px',
          color:'initial',
          fontWeight: '600',
          '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
        }}
        color="white">
        CANCEL ORDER
        </Typography>
      </Button>
      <AlertDialog
        open={cancelDialogOpen}
        handleClose={handleCancelDialogClose}
        title={'Cancel order?'}
        contentText={'Do you want to cancel the order?'}
        cancelLabel={'Reject'}
        confirmLabel={'Confirm'}
        handleConfirm={handleConfirmCancel}
      />
    </Box>
  )
}

export default Footer