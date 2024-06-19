import { useEffect } from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import {
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Divider
} from '@mui/material'

const title = 'Confirm Payment'
const cancelLabel = 'Cancel'
const confirmLabel = 'Confirm'

function Receipt({
  confirmationDialogOpen,
  setConfirmationDialogOpen,
  paymentMethod,
  total,
  handleConfirmPayment,
  paymentSuccess,
  showReceipt,
  setShowReceipt,
  receiptDetails,
  capitalizeLetter
}) {
  // const [showQRCode, setShowQRCode] = useState(false)
  let componentRef = useRef()
  useEffect(() => {
    if (paymentSuccess && paymentMethod.toLowerCase() === 'card') {
      // setShowQRCode(true)
    }
  }, [paymentSuccess, paymentMethod])

  const handleConfirmAndGenerateQR = () => {
    handleConfirmPayment()
    setConfirmationDialogOpen(false)
  }

  return (
    <>
      {/* Confirmation Dialog */}
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: '15px',
            height: '200px'
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={confirmationDialogOpen}
        onClose={() => setConfirmationDialogOpen(false)}
      >
        <DialogTitle id="alert-dialog-title" sx={{ m: '10px' }}>
          <Typography variant='h5' fontWeight={'600'}>{title}</Typography>
        </DialogTitle>
        <DialogContent sx={{ width: '300px', overflowY: 'hidden' }}>
          <Typography fontSize={'15px'}>Payment Method: {paymentMethod}</Typography>
          <Typography fontSize={'15px'}>Total Amount: {total}Đ</Typography>
        </DialogContent>
        <DialogActions>
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} p={'0 30px 20px 30px'}>
            <Button
              sx={{
                bgcolor: '#FF6868',
                boxShadow: 'none',
                width: '100px',
                borderRadius: '15px',
                cursor: 'pointer',
                fontSize: '16px',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
                userSelect: 'none',
                willChange: 'transform',
                '&:disabled': {
                  pointerEvents: 'none'
                },
                '&:hover': {
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
                  transform: 'translateY(-2px)',
                  bgcolor: '#FF6868'
                },
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                }
              }}
              onClick={() => setConfirmationDialogOpen(false)}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  color: 'black',
                  fontWeight: '600',
                  '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
                }}
              >
                {cancelLabel}
              </Typography>
            </Button>
            <Button
              sx={{
                bgcolor: '#DC5F00',
                boxShadow: 'none',
                width: '100px',
                borderRadius: '15px',
                cursor: 'pointer',
                fontSize: '16px',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
                userSelect: 'none',
                willChange: 'transform',
                '&:disabled': {
                  pointerEvents: 'none'
                },
                '&:hover': {
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
                  transform: 'translateY(-2px)',
                  bgcolor: '#DC5F00'
                },
                '&:active': {
                  boxShadow: 'none',
                  transform: 'translateY(0)'
                } }
              }
              onClick={handleConfirmAndGenerateQR}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  color: 'white',
                  '&.MuiTypography-root.MuiTypography-body1': { textTransform: 'none' }
                }}
              >
                {confirmLabel}
              </Typography>
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

      {/* Receipt Dialog */}
      <Box></Box>
      {paymentSuccess && showReceipt && (
        <Dialog
          open={showReceipt}
          onClose={() => setShowReceipt(false)}
          PaperProps={{
            sx: {
              padding: '20px',
              width: '550px',
              borderRadius: '15px'
            }
          }}
        >
          <Box ref={(el) => (componentRef = el)}>
            <DialogTitle
              sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="src/assets/logo.png" alt="Company Logo" style={{ width: '70px' }} />
              <Typography variant='h1' fontWeight={'bold'}>{capitalizeLetter('invoice')}</Typography>
            </DialogTitle>
            <DialogContent >
              <Box display="flex" justifyContent="space-between" alignItems={'center'}>
                <Box>
                  <Typography variant='body1' mt={2} fontSize={'10px'} fontWeight={'500'}>
                  Phở 10 Lý Quốc Sư<br />
                  10 P. Lý Quốc Sư, Hàng Trống, Hoàn Kiếm, Hà Nội<br />
                  Hanoi, Vietnam-100000<br />
                  </Typography>
                </Box>
                <Box textAlign="right">
                  <Typography variant='h6' fontWeight={'600'}>Invoice Details</Typography>
                  <Typography fontSize={'10px'}>Date: {receiptDetails.date}</Typography>
                  <Typography fontSize={'10px'}>Table: {receiptDetails.table}</Typography>
                </Box>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant='h7' fontSize={'12px'} fontWeight={'600'}>Item Descriptions</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '200px', alignItems: 'center' }}>
                    <Typography variant='h7' fontSize={'12px'} fontWeight={'600'}>Unit Price</Typography>
                    <Typography variant='h7' fontSize={'12px'} fontWeight={'600'}>Quantity</Typography>
                    <Typography variant='h7' fontSize={'12px'} fontWeight={'600'}>Amount</Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 1 }} />

                {receiptDetails.item && receiptDetails.item.map((item, index) => (
                  <Box key={index} mb={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='body1' fontSize={'10px'} fontWeight={'600'}>{item.itemName}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                      <Typography variant='body1' fontSize={'10px'} fontWeight={'600'}>{item.unitPrice}Đ</Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100px' }} >
                        <Typography variant='body1' fontSize={'10px'} fontWeight={'600'} textAlign={'center'}>{item.quantity}</Typography>
                        <Typography variant='body1' fontSize={'10px'} fontWeight={'600'}>{item.amount}Đ</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="space-between" width={'100%'}>
                <Box>
                  <Typography fontSize={'12px'} fontWeight={'bold'}>Payment Method</Typography>
                  <Typography fontSize={'10px'}>{receiptDetails.paymentMethod}</Typography>
                </Box>
                <Box width="170px">
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography fontSize={'10px'}>Subtotal:</Typography>
                    <Typography fontSize={'10px'} fontWeight={'bold'}>{(receiptDetails.subTotal).toFixed(3)}Đ</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography fontSize={'10px'}>Tip:</Typography>
                    <Typography fontSize={'10px'} fontWeight={'bold'}>{(receiptDetails.tip).toFixed(3)}Đ</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography fontSize={'10px'}>Service Charge: 10%</Typography>
                    <Typography fontSize={'10px'} fontWeight={'bold'}>{(receiptDetails.serviceCharge).toFixed(3)}Đ</Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography fontSize={'12px'} fontWeight="bold">Grand Total:</Typography>
                    <Typography fontSize={'10px'} fontWeight="bold" mt={'2px'}>{(receiptDetails.total).toFixed(3)}Đ</Typography>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <PhoneIcon fontSize='10px'/>
                  <Box display={'inline-block'} width={'120px'} ml={'5px'}>
                    <Typography fontSize={'8px'}> +111-2222-3333-444</Typography>
                    <Typography fontSize={'8px'}> +111-2222-3333-444</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <EmailIcon fontSize='8px'/>
                  <Box display={'inline-block'} width={'120px'} ml={'5px'}>
                    <Typography fontSize={'8px'}>sale@yourwebsite.com</Typography>
                    <Typography fontSize={'8px'}>support@yourwebsite.com</Typography>
                  </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  <LocationOnIcon fontSize='8px'/>
                  <Box display={'inline-block'} width={'80px'} ml={'5px'}>
                    <Typography fontSize={'8px'}> Hoàn Kiếm, Hà Nội</Typography>
                    <Typography fontSize={'8px'}>Hanoi, Vietnam-100000</Typography>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
          </Box>

          <DialogActions>
            <Button onClick={() => setShowReceipt(false)}>Close</Button>
            {paymentSuccess && (
              <>
                <ReactToPrint
                  trigger={() => <Button >Print</Button>}
                  content={() => componentRef}
                />
                <Button onClick={() => { /* Handle payment processing here */ }}>Pay</Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}

export default Receipt
