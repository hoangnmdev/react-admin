import { Box, useTheme, Typography } from '@mui/material'
import TableBarIcon from '@mui/icons-material/TableBar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import { capitalizeLetter } from '~/utils/formatter'

const GUEST_TITLE = 'guest:'
let NUMBER_OF_GUEST = 2
let PAYABLE_AMOUNT = '38,25'

function Title() {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      p={'0px 25px 20px 21px'}
      height={'40px'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Typography fontSize={'25px'} color={'#F0B86E'}>${PAYABLE_AMOUNT}</Typography>
      </Box>

      <Box display={'flex'} alignItems={'center'}>
        <SupervisorAccountIcon sx={{ fontSize: '20px', mr: '10px' }}/>
        <Typography fontSize={'15px'} color="initial">{capitalizeLetter(GUEST_TITLE)}</Typography>
        <Typography ml={'5px'} fontWeight={'600'} fontSize={'22px'} color={'#F0B86E'}>{NUMBER_OF_GUEST}</Typography>
      </Box>
    </Box>
  )
}

export default Title