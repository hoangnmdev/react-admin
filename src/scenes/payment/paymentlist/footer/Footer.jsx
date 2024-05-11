import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box
      bgcolor={'white'}
      height={'calc(100vh - 70px - 60px - 400px)'}
      display={'flex'}
      sx={{ borderTop: '2px solid rgba(0, 0, 0, 0.1)' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Button
        sx={{
          '&.MuiButton-containedPrimary': {
            bgcolor: '#FF6868',
            boxShadow: 'none',
            width: '800px',
            height: '70px',
            borderRadius: '10px'
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
    </Box>
  )
}

export default Footer