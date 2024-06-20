import { Dialog, DialogTitle, Typography, Box, DialogActions, Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const SuccessMessage = ({ open, onClose }) => {
  const close = () => {
    onClose()
  }
  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle sx={{ width: '300px', height: '140px' }}>
        <Box alignItems={'center'} justifyContent={'center'} alignContent={'center'} display={'flex'} width={'100%'}>
          <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main' }} />
        </Box>
        <Box alignItems={'center'} justifyContent={'center'} alignContent={'center'} display={'flex'} width={'100%'}>
          <Typography variant="h5" fontWeight={'600'} color="success.main">
          Success!
          </Typography>
        </Box>
      </DialogTitle>
      <DialogActions >
        <Box alignItems={'center'} justifyContent={'center'} alignContent={'center'} display={'flex'} width={'100%'} mb={'10px'}>
          <Button onClick={close}
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
          >
            <Typography
              sx={{
                fontSize: '15px',
                color: 'black',
                fontWeight: '600',
                '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
              }}
            >
              Close
            </Typography>
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}

export default SuccessMessage
