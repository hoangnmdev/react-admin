import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'

function Footer() {
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
          sx={{
            ml:'30px',
            '&.MuiButton-containedPrimary': {
              bgcolor: '#E3E1D9',
              boxShadow: 'none',
              width: '150px',
              height: '50px',
              borderRadius: '10px',
              '&:hover':{
                bgcolor: '#4F6F52',
                '& .MuiTypography-root': {
                  color: 'white'
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
        STARTER
          </Typography>
        </Button>
        {/**Main Course Menu Button */}
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#E3E1D9',
              boxShadow: 'none',
              width: '180px',
              height: '50px',
              borderRadius: '10px',
              '&:hover':{
                bgcolor: '#4F6F52',
                '& .MuiTypography-root': {
                  color: 'white'
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
        MAIN COURSE
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
              '&:hover':{
                bgcolor: '#4F6F52',
                '& .MuiTypography-root': {
                  color: 'white'
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
        DRINKS
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
              '&:hover':{
                bgcolor: '#4F6F52',
                '& .MuiTypography-root': {
                  color: 'white'
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
        DESSERTS
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Footer