import { Box, Typography, Button } from '@mui/material'

function Price({ subTotal }) {
  return (
    <Box sx={{
      width: '380px',
      height: '250px',
      border:'3px dashed rgba(0, 0, 0, 0.1)',
      mt: '30px',
      borderRadius: '10px',
      bgcolor: '#FAFAFA'
    }}>
      <Box
        p={'15px'}
        justifyContent={'space-between'}
        display={'flex'}
        alignItems={'flex-start'}
      >
        <Box>
          <Typography fontSize={'13px'} fontWeight={'510'} color="initial">SUBTOTAL</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: '10px' }}>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">SERVICE CHARGE:</Typography>
            <Typography fontSize={'13px'} fontWeight={'700'} color="initial" ml={'10px'}>10%</Typography>
          </Box>
        </Box>
        {/**Truyền price vào đây */}
        <Box sx={{ position: 'relative' }} >
          <Box>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{subTotal}Đ</Typography>
          </Box>
          <Box sx={{ position: 'absolute', top: '1.8rem', right: 0 }}>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">$0.5</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        borderTop={'3px dashed rgba(0, 0, 0, 0.1)'}
        p={'0px 2px 0 2px'}
      >
        <Typography fontSize={'25px'} fontWeight={'600'} p={'12px'}>TOTAL</Typography>
        <Typography fontSize={'25px'} fontWeight={'600'} p={'12px'}>$38.50</Typography>
      </Box>
      <Box
        p='2rem 1.5rem 0 1.5rem'
        display={'flex'}
        justifyContent={'space-between'}>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FF6868',
              boxShadow: 'none',
              width: '150px',
              height: '50px',
              borderRadius: '10px',
              willChange: 'transform',
              '&:hover':{
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                }
              }
            }
          }} variant="contained">
          <Typography sx={{
            fontSize: '16px',
            color: 'black',
            fontWeight: '510',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
        CANCEL ORDER
          </Typography>
        </Button>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#CDE8E5',
              boxShadow: 'none',
              width: '150px',
              height: '50px',
              borderRadius: '10px',
              willChange: 'transform',
              '&:hover':{
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                }
              }
            }
          }} variant="contained">
          <Typography sx={{
            fontSize: '16px',
            color: 'black',
            fontWeight: '510',
            '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
          }}
          color="white">
        SEND ORDER
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Price