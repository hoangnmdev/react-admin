import { Typography, Box } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const AlertDialog = ({ open, handleClose, title, contentText, cancelLabel, confirmLabel, handleConfirm }) => {

  const handleCancel = () => {
    handleClose()
  }

  const handleClickConfirm = () => {
    handleConfirm()
  }

  return (
    <Dialog
      PaperProps={{
        sx: {
          borderRadius: '15px',
          height: '180px'
        }
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ m: '10px' }}>
        <Typography variant='h5' fontWeight={'600'}>{title}</Typography>
      </DialogTitle>
      <DialogContent sx={{ width: '300px', overflowY: 'hidden' }}>
        <DialogContentText id="alert-dialog-description" sx={{ m: '0 0 0 10px' }}>
          <Typography fontSize={'15px'}>{contentText}</Typography>
        </DialogContentText>
      </DialogContent>
      <Box display={'flex'} justifyContent={'space-between'} p={'0 40px 30px 40px'}>
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
          onClick={handleCancel}
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
            }
          }}
          onClick={handleClickConfirm}
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
    </Dialog>
  )
}

export default AlertDialog
