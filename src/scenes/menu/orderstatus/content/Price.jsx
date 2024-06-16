import { Box, Typography, Button } from '@mui/material'
import AlertDialog from '~/components/AlertDialog'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SnackBarAlert from '~/components/SnackBarAlert'

function Price({ subTotal, setSelectedTable, setSelectedItem, total, setTotal, selectedItem }) {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const [sendDialogOpen, setSendDialogOpen] = useState(false)
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const navigate = useNavigate()

  // Ensure subTotal is treated as a number
  const subTotalNumber = parseFloat(subTotal)

  // Calculate the service charge
  const serviceCharge = (subTotalNumber * 0.10).toFixed(3) // 10% service charge, fixed to 2 decimal places

  useEffect(() => {
    // Ensure total calculation is done with numbers
    const totalPrice = (subTotalNumber + parseFloat(serviceCharge)).toFixed(3)
    setTotal(totalPrice)
  }, [subTotalNumber, serviceCharge, setTotal])

  const handleCancelDialogClose = () => {
    setCancelDialogOpen(false)
  }

  const handleCancelDialogOpen = () => {
    setCancelDialogOpen(true) // Open the cancel dialog
  }

  const handleSendDialogClose = () => {
    setSendDialogOpen(false)
  }

  const handleSendDialogOpen = () => {
    if (selectedItem.length === 0) {
      setOpenSnackBar(true) // Open snackbar if no item is selected
    } else {
      setSendDialogOpen(true) // Open the send dialog if items are selected
    }
  }

  const handleConfirmCancel = () => {
    navigate('/dashboard')
    setSelectedTable(null)
    setSelectedItem([])
    handleCancelDialogClose()
  }

  const handleConfirmSend = () => {
    navigate('/payment')
    handleSendDialogClose()
  }

  const handleSnackBarClose = () => {
    setOpenSnackBar(false)
  }

  return (
    <Box sx={{
      width: '420px',
      height: '250px',
      border: '3px dashed rgba(0, 0, 0, 0.1)',
      mt: '15px',
      borderRadius: '10px',
      bgcolor: '#FAFAFA'
    }}>
      <Box
        p={'15px'}
        justifyContent={'space-between'}
        display={'flex'}
        alignItems={'flex-start'}
      >
        <Box>
          <Typography fontSize={'13px'} fontWeight={'510'} color="initial">SUBTOTAL</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: '10px' }}>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">SERVICE CHARGE:</Typography>
            <Typography fontSize={'13px'} fontWeight={'700'} color="initial" ml={'10px'}>10%</Typography>
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Box>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{subTotalNumber.toFixed(2)}Đ</Typography>
          </Box>
          <Box sx={{ position: 'absolute', top: '1.8rem', right: 0 }}>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{serviceCharge}Đ</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        borderTop={'3px dashed rgba(0, 0, 0, 0.1)'}
        p={'0px 2px 0 2px'}
      >
        <Typography fontSize={'25px'} fontWeight={'600'} p={'12px'}>TOTAL</Typography>
        <Typography fontSize={'25px'} fontWeight={'600'} p={'12px'}>{total}Đ</Typography>
      </Box>
      <Box
        p='2rem 1.5rem 0 1.5rem'
        display={'flex'}
        justifyContent={'space-between'}>
        <Button onClick={handleCancelDialogOpen}
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FF6868',
              boxShadow: 'none',
              width: '150px',
              height: '50px',
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
            fontSize: '16px',
            color: 'black',
            fontWeight: '510',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
            CANCEL ORDER
          </Typography>
        </Button>
        <Button onClick={handleSendDialogOpen}
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#CDE8E5',
              boxShadow: 'none',
              width: '150px',
              height: '50px',
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
            fontSize: '16px',
            color: 'black',
            fontWeight: '510',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
            SEND ORDER
          </Typography>
        </Button>
      </Box>
      <AlertDialog
        open={cancelDialogOpen}
        handleClose={handleCancelDialogClose}
        title={'Cancel order?'}
        contentText={'Do you want to cancel the order?'}
        cancelLabel={'Reject'}
        confirmLabel={'Confirm'}
        handleConfirm={handleConfirmCancel}
      />
      <AlertDialog
        open={sendDialogOpen}
        handleClose={handleSendDialogClose}
        title={'Send order?'}
        contentText={'Do you want to send the order?'}
        cancelLabel={'Reject'}
        confirmLabel={'Confirm'}
        handleConfirm={handleConfirmSend}
      />
      {/* Snackbar for notification */}
      <SnackBarAlert open={openSnackBar} onClose={handleSnackBarClose} message={'Please select the item before proceeding.'} />
    </Box>
  )
}

export default Price
