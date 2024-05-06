import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '~/theme'
import Floor from './floor/Floor'

function Header() {
  const theme = useTheme()
  // const colors = tokens(theme.palette.mode)

  return (
    <Box
      bgcolor={'#F0F0F0'}
      height={'60px'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      {/**Title*/}
      <Box>

        <Typography
          fontSize={'25px'}
          fontWeight={'bold'}
          p={'12px'}
          ml={'10px'}
        >
        TABLE LIST
        </Typography>
      </Box>
      {/**Floor button */}
      <Floor/>
    </Box>
  )
}

export default Header