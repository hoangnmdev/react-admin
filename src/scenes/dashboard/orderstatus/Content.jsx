import { Box, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'

function Content() {
  return (
    <Box
      height={'calc(100vh - 70px - 40px - 60px)'}
      justifyContent={'center'}
      alignItems={'center'}
      display={'flex'}
    >
      <Box
      >
        <Box textAlign="center">
          <FastfoodIcon sx={{ fontSize: '100px' }} />
        </Box>
        <Box textAlign="center" p={'40px 0px 0px 0px '} width={'150px'}>
          <Typography variant="h5" color="initial">NO PRODUCT IN THIS MOMENT ADDED</Typography>
        </Box>
      </Box>
    </Box>
  )
}8

export default Content