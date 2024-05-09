import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '~/theme'
import TableBarIcon from '@mui/icons-material/TableBar'
import { capitalizeLetter } from '~/utils/formatter'

const ORDER_TITLE = 'order#:'
let ORDER_ID = '8797'
const ORDER_TABLE_TITLE = 'table:'
let ORDER_TABLE_NUMBER = 1

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
        <Typography fontSize={'25px'} ml={'10px'} display={'inline'}>{capitalizeLetter(ORDER_TITLE)}</Typography>
        <Typography fontSize={'25px'} display={'inline'} ml={'5px'}>{ORDER_ID}</Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} mr={'20px'}>
        <TableBarIcon sx={{ fontSize: '20px' }}/>
        <Typography fontSize={'15px'} color="initial" ml={'10px'} fontWeight={'600'}>{capitalizeLetter(ORDER_TABLE_TITLE)}</Typography>
        <Typography fontSize={'22px'} fontWeight={'600'} ml={'5px'} color={'#F0B86E'}>{ORDER_TABLE_NUMBER}</Typography>
      </Box>
    </Box>
  )
}

export default Header