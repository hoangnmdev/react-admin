import { Box, useTheme, Typography } from '@mui/material'
// import { tokens } from '~/theme'
import { capitalizeLetter } from '~/utils/formatter'

const TABLE_LIST_TITLE = 'table list'
function Header() {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)

  return (
    <Box
      borderBottom= '2px solid rgba(0, 0, 0, 0.1)'
      bgcolor={'white'}
      height={'60px'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Box>
        <Typography
          fontSize={'25px'}
          fontWeight={'600'}
          p={'12px'}
          ml={'10px'}
        >
          {capitalizeLetter(TABLE_LIST_TITLE)}
        </Typography>
      </Box>
    </Box>
  )
}

export default Header