import { Box, Typography } from '@mui/material'
import TableBarIcon from '@mui/icons-material/TableBar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'

function Title() {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      p={'0px 25px 15px 21px'}
      height={'40px'}
    >
      <Box display={'flex'}>
        <SupervisorAccountIcon sx={{ fontSize: '20px', mr: '10px' }}/>
        <Typography fontSize={'15px'} color="initial">GUEST:</Typography>
      </Box>
      <Box display={'flex'}>
        <TableBarIcon
          sx={{
            fontSize: '20px',
            mr: '10px'
          }}/>
        <Typography fontSize={'15px'} color="initial">TABLE: </Typography>
      </Box>
    </Box>
  )
}

export default Title