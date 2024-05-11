import { Box, Typography, Button } from '@mui/material'
import { capitalizeLetter } from '~/utils/formatter'
import PaymentsIcon from '@mui/icons-material/Payments'
import CreditCardIcon from '@mui/icons-material/CreditCard'

const ADD_TIP_TITLE = 'add tip'
const TIP_NUMBER_1 = 5
const TIP_NUMBER_2 = 10
const TIP_NUMBER_3 = 15
const TIP_NUMBER_4 = 20

const CASH_TITLE = 'cash'
const CARD_TITLE = 'card'
const VOUCHER_TITLE = 'voucher'

const SUBTOTAL_TITLE = 'subtotal'
const TIPS_TITLE = 'tips'
const SERVICE_CHARGE_TITLE = 'service charge:'
let SERVICE_CHARGE_AMOUNT = 10
let SUBTOTAL_NUMBER = 35.00
let SERVICE_CHARGE_NUMBER = 0.5

const TOTAL_TITLE = 'total'
let TOTAL = SUBTOTAL_NUMBER + SERVICE_CHARGE_NUMBER + TIP_NUMBER_1
const PAYNOW_TITLE = 'pay now'

function Content() {
  return (
    <Box
      height={'calc(100vh - 70px - 40px - 60px)'}
    >
      <Box
        borderBottom= '2px dashed rgba(0, 0, 0, 0.1)'
        borderTop= '2px dashed rgba(0, 0, 0, 0.1)'
        width={'100%'}
        height={'85px'}
        p='25px'
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography fontSize={'14px'} fontWeight={'700'}>{capitalizeLetter(ADD_TIP_TITLE)}</Typography>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '2.5rem',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#F1F2EB',
                '& .MuiTypography-root': {
                  color: 'black'
                }
              }
            }
          }} variant="contained"
        >
          <Typography variant='h3' color={'#A9A9A9'}>${TIP_NUMBER_1}</Typography>
        </Button>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '2.5rem',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#F1F2EB',
                '& .MuiTypography-root': {
                  color: 'black'
                }
              }
            }
          }} variant="contained"
        >
          <Typography variant='h3' color={'#A9A9A9'}>${TIP_NUMBER_2}</Typography>
        </Button>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '2.5rem',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#F1F2EB',
                '& .MuiTypography-root': {
                  color: 'black'
                }
              }
            }
          }} variant="contained"
        >
          <Typography variant='h3' color={'#A9A9A9'}>${TIP_NUMBER_3}</Typography>
        </Button>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '2.5rem',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#F1F2EB',
                '& .MuiTypography-root': {
                  color: 'black'
                }
              }
            }
          }} variant="contained"
        >
          <Typography variant='h3' color={'#A9A9A9'}>${TIP_NUMBER_4}</Typography>
        </Button>
      </Box>
      <Box
        width={'100%'}
        height={'85px'}
        p='20px 60px 0px 60px'
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '4rem',
              width: '70px',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#F1F2EB',
                '& .MuiSvgIcon-root': {
                  color: 'black'
                },
                '& .MuiTypography-root':{
                  color: 'black',
                  fontWeight: '600'
                }
              }
            }
          }} variant="contained"
        >
          <Box>
            <PaymentsIcon sx={{ color: '#A9A9A9' }}/>
            <Typography fontWeight={'600'} color={'#A9A9A9'}>{capitalizeLetter(CASH_TITLE)}</Typography>
          </Box>
        </Button>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '4rem',
              width: '70px',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#F1F2EB',
                '& .MuiSvgIcon-root': {
                  color: 'black'
                },
                '& .MuiTypography-root':{
                  color: 'black',
                  fontWeight: '600'
                }
              }
            }
          }} variant="contained"
        >
          <Box>
            <CreditCardIcon sx={{ color: '#A9A9A9' }}/>
            <Typography fontWeight={'600'} color={'#A9A9A9'}>{capitalizeLetter(CARD_TITLE)}</Typography>
          </Box>
        </Button>
        <Button
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '4rem',
              width: '90px',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#F1F2EB',
                '& .MuiSvgIcon-root': {
                  color: 'black'
                },
                '& .MuiTypography-root':{
                  color: 'black',
                  fontWeight: '600'
                }
              }
            }
          }} variant="contained"
        >
          <Box>
            <PaymentsIcon sx={{ color: '#A9A9A9' }}/>
            <Typography fontWeight={'600'} color={'#A9A9A9'}>{capitalizeLetter(VOUCHER_TITLE)}</Typography>
          </Box>
        </Button>
      </Box>
      <Box sx={{
        width: '100%',
        height: '250px',
        borderTop:'3px dashed rgba(0, 0, 0, 0.1)',
        mt: '30px'
      }}>


        <Box
          p={'25px'}
          justifyContent={'space-between'}
          display={'flex'}
          alignItems={'flex-start'}
        >
          <Box>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{capitalizeLetter(SUBTOTAL_TITLE)}</Typography>
            <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{capitalizeLetter(TIPS_TITLE)}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{capitalizeLetter(SERVICE_CHARGE_TITLE)}</Typography>
              <Typography fontSize={'13px'} fontWeight={'700'} color="initial" ml={'10px'}>{SERVICE_CHARGE_AMOUNT}%</Typography>
            </Box>
          </Box>
          <Box sx={{ position: 'relative' }} >
            <Box sx={{ position: 'absolute', top: 0, right: 0, bottom: 0 }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">${SUBTOTAL_NUMBER}</Typography>
              {/* <Typography fontSize={'13px'} fontWeight={'510'} color="initial">${TIP_NUMBER_1}</Typography> */}
            </Box>
            <Box sx={{ position: 'absolute', right: 0, top: 18, bottom:0 }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">${TIP_NUMBER_1}</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: 40, right: 0 }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">${SERVICE_CHARGE_NUMBER}</Typography>
            </Box>
          </Box>
        </Box>


        <Box
          display={'flex'}
          justifyContent={'space-between'}
          borderTop={'3px dashed rgba(0, 0, 0, 0.1)'}
          p={'25px 25px 0 25px'}
        >
          <Typography fontSize={'25px'} p={'12px'}>{capitalizeLetter(TOTAL_TITLE)}</Typography>
          <Typography fontSize={'25px'} p={'12px'}>${TOTAL}</Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          pt={'15px'}
        >
          <Button
            sx={{
              '&.MuiButton-containedPrimary': {
                bgcolor: '#7AB2B2',
                boxShadow: 'none',
                width: '380px',
                height: '70px',
                borderRadius: '10px'
              }
            }} variant="contained">
            <Typography sx={{
              fontSize: '25px',
              color: 'black',
              fontWeight: '600',
              '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
            }}
            color="white">
              {capitalizeLetter(PAYNOW_TITLE)}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Content