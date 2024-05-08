import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '~/theme'
import TableBarIcon from '@mui/icons-material/TableBar'

function Header() {
  const theme = useTheme()
  // const colors = tokens(theme.palette.mode)

  return (
    <Box
      bgcolor={'white'}
      height={'60px'}
      display={'flex'}
      justifyContent={'space-between'}
      p={'0px 12px 0px 0px'}
      sx={{ borderBottom: '2px solid rgba(0, 0, 0, 0.1)' }}
      alignItems={'center'}
    >
      <Box>
        <Typography fontSize={'25px'} ml={'10px'} display={'inline'}>ORDER #:</Typography>
        <Typography fontSize={'25px'} display={'inline'} ml={'5px'}>8797</Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} mr={'20px'}>
        <TableBarIcon sx={{ fontSize: '20px' }}/>
        <Typography fontSize={'15px'} color="initial" ml={'10px'} fontWeight={'600'}>TABLE:</Typography>
        <Typography fontSize={'22px'} fontWeight={'600'} ml={'5px'} color={'#F0B86E'}>1</Typography>
      </Box>
    </Box>
  )
}

export default Header