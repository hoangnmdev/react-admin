import { Box, useTheme, Typography } from '@mui/material'
import { tokens } from '~/theme'
import Floor from './floor/Floor'

function Header({ handleFloorSelect }) {
  const theme = useTheme()
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
        TABLE LIST
        </Typography>
      </Box>
      {/**Floor button */}
      {/* Pass the handleFloorSelect function as a prop */}
      <Floor onFloorSelect={handleFloorSelect}/>
    </Box>
  )
}

export default Header