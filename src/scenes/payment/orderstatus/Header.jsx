import { Box, useTheme, Typography } from '@mui/material'

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
        <Typography
          fontSize={'25px'}
          fontWeight={'600'}
          p={'12px'}
          ml={'10px'}
        >
    ORDER #
        </Typography>
      </Box>
      <Box>
        <Typography
          fontSize={'25px'}
          fontWeight={'600'}
          p={'12px'}
          ml={'10px'}
        >
          {/**Truyền id order */}
    8797
        </Typography>
      </Box>
    </Box>
  )
}

export default Header