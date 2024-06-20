import { Box, Typography } from '@mui/material'

function Title({ total }) {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      p={'0px 25px 20px 21px'}
      height={'40px'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Typography fontSize={'25px'} color={'#F0B86E'}>{total ? total : ''}Đ</Typography>
      </Box>

    </Box>
  )
}

export default Title