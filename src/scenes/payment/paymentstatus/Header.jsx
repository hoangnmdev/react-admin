import { Box, Typography } from '@mui/material'
import { capitalizeLetter } from '~/utils/formatter'

const HEADER_TITLE = 'payable amount'

function Header() {
  return (
    <Box
      bgcolor={'white'}
      height={'60px'}
      display={'flex'}
      justifyContent={'space-between'}
      p={'0px 12px 0px 0px'}
    >
      <Box>
        <Typography fontSize={'25px'} p={'12px'} ml={'10px'}>{capitalizeLetter(HEADER_TITLE)}</Typography>
      </Box>
    </Box>
  )
}

export default Header