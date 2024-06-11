import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'

function Footer({ fetchPhoBoMenu, fetchPhoGaMenu }) {
  return (
    <Box
      bgcolor={'white'}
      height={'calc(100vh - 70px - 400px)'}
      sx={{ borderTop: '2px solid rgba(0, 0, 0, 0.1)' }}
    >
      {/**MENU CONTAINER */}
      <Box
        sx={{
          p: '20px 0px 20px 0px',
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: '#F1F2EB'
        }}>
        {/**Starter Menu Button */}
        <Button
          onClick={fetchPhoBoMenu} // Set menu to Phở Bò
          sx={{
            ml:'30px',
            '&.MuiButton-containedPrimary': {
              bgcolor: '#E3E1D9',
              boxShadow: 'none',
              width: '150px',
              height: '50px',
              borderRadius: '10px',
              willChange: 'transform',
              '&:hover':{
                bgcolor: '#4F6F52',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '& .MuiTypography-root': {
                  color: 'white'
                },
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                }
              }
            }
          }} variant="contained">
          <Typography sx={{
            fontSize: '16px',
            color: '#A9A9A9',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
        PHỞ BÒ
          </Typography>
        </Button>
        {/**Main Course Menu Button */}
        <Button
          onClick={fetchPhoGaMenu} // Set menu to Phở Gà
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#E3E1D9',
              boxShadow: 'none',
              width: '180px',
              height: '50px',
              borderRadius: '10px',
              willChange: 'transform',
              '&:hover':{
                bgcolor: '#4F6F52',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '& .MuiTypography-root': {
                  color: 'white'
                },
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                }
              }
            }
          }} variant="contained">
          <Typography sx={{
            color: '#A9A9A9',
            fontSize: '16px',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
        PHỞ GÀ
          </Typography>
        </Button>
        {/*Drinks Menu Button */}
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#E3E1D9',
              boxShadow: 'none',
              width: '150px',
              height: '50px',
              borderRadius: '10px',
              willChange: 'transform',
              '&:hover':{
                bgcolor: '#4F6F52',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '& .MuiTypography-root': {
                  color: 'white'
                },
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                }
              }
            }
          }} variant="contained">
          <Typography sx={{
            color: '#A9A9A9',
            fontSize: '16px',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
       CƠM NIÊU
          </Typography>
        </Button>
        {/**Desserts Course Menu Button */}
        <Button
          sx={{
            mr:'30px',
            '&.MuiButton-containedPrimary': {
              bgcolor: '#E3E1D9',
              boxShadow: 'none',
              width: '160px',
              height: '50px',
              borderRadius: '10px',
              willChange: 'transform',
              '&:hover':{
                bgcolor: '#4F6F52',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '& .MuiTypography-root': {
                  color: 'white'
                },
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                }
              }
            }
          }} variant="contained">
          <Typography sx={{
            color: '#A9A9A9',
            fontSize: '16px',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
        MÓN THÊM
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Footer
