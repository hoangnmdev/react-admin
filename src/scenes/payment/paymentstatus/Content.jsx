import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import PaymentsIcon from '@mui/icons-material/Payments'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import Receipt from './Receipt' // Adjust the import path as needed
import { capitalizeLetter } from '~/utils/formatter'

const ADD_TIP_TITLE = 'add tip'
const TIP_OPTIONS = [10, 20, 30, 40]
const CASH_TITLE = 'cash'
const CARD_TITLE = 'card'
const VOUCHER_TITLE = 'voucher'
const SUBTOTAL_TITLE = 'subtotal'
const TIPS_TITLE = 'tips'
const SERVICE_CHARGE_TITLE = 'service charge:'
const SERVICE_CHARGE_AMOUNT = 10
const TOTAL_TITLE = 'total'
const PAYNOW_TITLE = 'pay now'

function Content({ subTotal, selectedItem, selectedTable }) {
  const [selectedTip, setSelectedTip] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [receiptDetails, setReceiptDetails] = useState({})

  const subTotalNumber = parseFloat(subTotal)
  const serviceCharge = (subTotalNumber * SERVICE_CHARGE_AMOUNT / 100).toFixed(3)
  const total = (subTotalNumber + parseFloat(serviceCharge) + selectedTip).toFixed(3)

  const handleTipClick = (tip) => {
    setSelectedTip(tip)
  }

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method)
    setConfirmationDialogOpen(true)
  }

  const handleConfirmPayment = () => {
    setConfirmationDialogOpen(false)
    // Simulate payment processing
    if (paymentMethod === 'Card') {
      // Simulate card payment
      setTimeout(() => {
        setPaymentSuccess(true)
        generateReceipt()
      }, 1000)
    } else if (paymentMethod === 'Cash' || paymentMethod === 'Voucher') {
      // Confirm cash payment or validate voucher
      setPaymentSuccess(true)
      generateReceipt()
    }
  }

  const generateReceipt = () => {
    const receipt = {
      subTotal: subTotalNumber,
      tip: selectedTip,
      serviceCharge: parseFloat(serviceCharge),
      total: parseFloat(total),
      table: selectedTable.tableName,
      paymentMethod: paymentMethod,
      date: new Date().toLocaleString(),
      item: selectedItem.map(item => ({
        itemName: item.itemName,
        quantity: item.quantity,
        unitPrice: item.price,
        amount: item.totalPrice
      }))
    }
    setReceiptDetails(receipt)
    setShowReceipt(true)
  }

  return (
    <Box height={'calc(100vh - 70px - 40px - 60px)'}>
      <Box
        borderBottom='2px dashed rgba(0, 0, 0, 0.1)'
        borderTop='2px dashed rgba(0, 0, 0, 0.1)'
        width={'100%'}
        height={'85px'}
        p='25px'
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography fontSize={'18px'} fontWeight={'700'}>{capitalizeLetter(ADD_TIP_TITLE)}</Typography>
        {TIP_OPTIONS.map((tip) => (
          <Button
            key={tip}
            onClick={() => handleTipClick(tip)}
            sx={{
              '&.MuiButton-containedPrimary': {
                bgcolor: '#FAFAFA',
                boxShadow: 'none',
                height: '2.5rem',
                borderRadius: '10px',
                '&:hover': {
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                  transform: 'translateY(-2px)',
                  '&:active': {
                    boxShadow: 'none',
                    transform: 'translateY(0)'
                  },
                  '& .MuiTypography-root': {
                    color: 'black'
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'black'
                  }
                }
              }
            }}
            variant="contained"
          >
            <Typography variant='h3' color={'#A9A9A9'}>
              {tip}
            </Typography>
          </Button>
        ))}
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
          onClick={() => handlePaymentMethodClick('Cash')}
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '4rem',
              width: '70px',
              borderRadius: '10px',
              '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                },
                '& .MuiTypography-root': {
                  color: 'black'
                },
                '& .MuiSvgIcon-root': {
                  color: 'black'
                }
              }
            }
          }}
          variant="contained"
        >
          <Box>
            <PaymentsIcon sx={{ color: '#A9A9A9' }}/>
            <Typography fontWeight={'600'} color={'#A9A9A9'}>{capitalizeLetter(CASH_TITLE)}</Typography>
          </Box>
        </Button>
        <Button
          onClick={() => handlePaymentMethodClick('Card')}
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '4rem',
              width: '70px',
              borderRadius: '10px',
              '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                },
                '& .MuiTypography-root': {
                  color: 'black'
                },
                '& .MuiSvgIcon-root': {
                  color: 'black'
                }
              }
            }
          }}
          variant="contained"
        >
          <Box>
            <CreditCardIcon sx={{ color: '#A9A9A9' }}/>
            <Typography fontWeight={'600'} color={'#A9A9A9'}>{capitalizeLetter(CARD_TITLE)}</Typography>
          </Box>
        </Button>
        <Button
          onClick={() => handlePaymentMethodClick('Voucher')}
          sx={{
            '&.MuiButton-containedPrimary': {
              bgcolor: '#FAFAFA',
              boxShadow: 'none',
              height: '4rem',
              width: '70px',
              borderRadius: '10px',
              '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                transform: 'translateY(-2px)',
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                },
                '& .MuiTypography-root': {
                  color: 'black'
                },
                '& .MuiSvgIcon-root': {
                  color: 'black'
                }
              }
            }
          }}
          variant="contained"
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
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{subTotal ? subTotal : ''}Đ</Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: 0, top: 18, bottom:0 }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{selectedTip.toFixed(3)}Đ</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: 40, right: 0 }}>
              <Typography fontSize={'13px'} fontWeight={'510'} color="initial">{serviceCharge ? serviceCharge : ''}Đ</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          borderTop={'3px dashed rgba(0, 0, 0, 0.1)'}
          p={'25px 25px 0 25px'}
        >
          <Typography fontSize={'30px'} p={'10px'}>{capitalizeLetter(TOTAL_TITLE)}</Typography>
          <Typography fontSize={'30px'} p={'10px'}>{total}Đ</Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          pt={'15px'}
        >
          <Button
            onClick={handleConfirmPayment}
            sx={{
              '&.MuiButton-containedPrimary': {
                bgcolor: '#7AB2B2',
                boxShadow: 'none',
                width: '380px',
                height: '70px',
                borderRadius: '10px',
                willChange: 'transform',
                '&:hover': {
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0 2px 10px',
                  transform: 'translateY(-2px)',
                  '&:active': {
                    boxShadow: 'none',
                    transform: 'translateY(0)'
                  }
                }
              }
            }}
            variant="contained"
          >
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
      <Receipt
        confirmationDialogOpen={confirmationDialogOpen}
        setConfirmationDialogOpen={setConfirmationDialogOpen}
        paymentMethod={paymentMethod}
        total={total}
        handleConfirmPayment={handleConfirmPayment}
        paymentSuccess={paymentSuccess}
        showReceipt={showReceipt}
        setShowReceipt={setShowReceipt}
        receiptDetails={receiptDetails}
        capitalizeLetter={capitalizeLetter}
      />
    </Box>
  )
}

export default Content
