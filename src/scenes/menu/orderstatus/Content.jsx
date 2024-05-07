import { Box, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'

function Content() {
  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      display={'flex'}
      p={'20px 0 0 0'}
    >
      {/**Order Cuisine Container */}
      <Box
        sx={{ overflowY: 'auto' }} //
        bgcolor={'black'}
        width={'400px'}
        height={'200px'}
        justifyContent={'center'}
        justifyItems={'center'}
        display={'block'}
        p={'15px 0px 0px 25px'}
      >
        <Box
          bgcolor={ '#F1F2EB'}
          height={'70px'}
          width={'350px'}
        >
          Hoang
        </Box>
        <Box
          bgcolor={ '#F1F2EB'}
          height={'70px'}
          width={'350px'}
        >
          Hoang
        </Box>
      </Box>
    </Box>
  )
}8

export default Content