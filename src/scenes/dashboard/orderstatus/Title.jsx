import { Box, Typography } from '@mui/material'
import TableBarIcon from '@mui/icons-material/TableBar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'

function Title({ selectedTable }) {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      p={'0px 25px 20px 21px'}
      borderBottom='2px solid rgba(0, 0, 0, 0.1)'
      height={'40px'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <SupervisorAccountIcon sx={{ fontSize: '20px', mr: '10px' }} />
        <Typography fontSize={'15px'} color="initial">GUEST:</Typography>
        <Typography
          fontWeight={'600'}
          fontSize={'22px'}
          color={'#F0B86E'}
          ml={'5px'}>
          {selectedTable ? `${selectedTable.numberOfGuest}` : ''}
        </Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <TableBarIcon
          sx={{
            fontSize: '20px',
            mr: '10px'
          }} />
        <Typography fontSize={'15px'} color="initial">TABLE: </Typography>
        <Typography
          fontWeight={'600'}
          fontSize={'22px'}
          color={'#F0B86E'}
          ml={'5px'}>
          {selectedTable ? `${selectedTable.tableId}` : ''}
        </Typography>
      </Box>
    </Box>
  )
}

export default Title
