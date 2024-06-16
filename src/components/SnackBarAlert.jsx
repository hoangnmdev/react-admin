import { Snackbar, Alert, Typography } from '@mui/material'

function SnackBarAlert({ open, onClose, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="warning" sx={{ width: '100%', height: '50px' }}>
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  )
}

export default SnackBarAlert
