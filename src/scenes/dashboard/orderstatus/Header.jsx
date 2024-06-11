import { Box, useTheme, Typography } from '@mui/material'

function Header({ selectedTable }) {
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
          {selectedTable ? `${selectedTable.orderId}` : ''}
        </Typography>
      </Box>
    </Box>
  )
}

export default Header