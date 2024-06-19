import {
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button
} from '@mui/material'

const title = 'Confirm Payment'
const cancelLabel = 'Cancel'
const confirmLabel = 'Confirm'

function ConfirmDialog({
  confirmationDialogOpen,
  setConfirmationDialogOpen,
  paymentMethod,
  total,
  handleConfirmPayment
}) {
  const handleConfirm = () => {
    handleConfirmPayment()
    setConfirmationDialogOpen(false)
  }
  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: '15px',
          height: '200px'
        }
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      open={confirmationDialogOpen}
      onClose={() => setConfirmationDialogOpen(false)}
    >
      <DialogTitle id="alert-dialog-title" sx={{ m: '10px' }}>
        <Typography variant='h5' fontWeight={'600'}>{title}</Typography>
      </DialogTitle>
      <DialogContent sx={{ width: '300px', overflowY: 'hidden' }}>
        <Typography fontSize={'15px'}>Payment Method: {paymentMethod}</Typography>
        <Typography fontSize={'15px'}>Total Amount: {total}Đ</Typography>
      </DialogContent>
      <DialogActions>
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'} p={'0 30px 20px 30px'}>
          <Button
            sx={{
              bgcolor: '#FF6868',
              boxShadow: 'none',
              width: '100px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '16px',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
              userSelect: 'none',
              willChange: 'transform',
              '&:disabled': {
                pointerEvents: 'none'
              },
              '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
                transform: 'translateY(-2px)',
                bgcolor: '#FF6868'
              },
              '&:active': {
                boxShadow: 'none',
                transform: 'translateY(0)'
              }
            }}
            onClick={() => setConfirmationDialogOpen(false)}
          >
            <Typography
              sx={{
                fontSize: '15px',
                color: 'black',
                fontWeight: '600',
                '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
              }}
            >
              {cancelLabel}
            </Typography>
          </Button>
          <Button
            sx={{
              bgcolor: '#DC5F00',
              boxShadow: 'none',
              width: '100px',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '16px',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
              userSelect: 'none',
              willChange: 'transform',
              '&:disabled': {
                pointerEvents: 'none'
              },
              '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
                transform: 'translateY(-2px)',
                bgcolor: '#DC5F00'
              },
              '&:active': {
                boxShadow: 'none',
                transform: 'translateY(0)'
              } }
            }
            onClick={handleConfirm}
          >
            <Typography
              sx={{
                fontSize: '15px',
                color: 'white',
                '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
              }}
            >
              {confirmLabel}
            </Typography>
          </Button>
        </Box>
      </DialogActions>
    </Dialog>

  )
}

export default ConfirmDialog