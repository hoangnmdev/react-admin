import { useEffect } from 'react'
import InvoiceDialog from './InvoiceDialog'
import ConfirmDialog from './ConfirmDialog'
import { Box } from '@mui/material'

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
  capitalizeLetter,
  selectedTable
}) {
  // const [showQRCode, setShowQRCode] = useState(false)
  useEffect(() => {
    if (paymentSuccess && paymentMethod.toLowerCase() === 'card') {
      // setShowQRCode(true)
    }
  }, [paymentSuccess, paymentMethod])


  return (
    <Box>
      <InvoiceDialog
        paymentSuccess={paymentSuccess}
        showReceipt={showReceipt}
        setShowReceipt={setShowReceipt}
        receiptDetails={receiptDetails}
        capitalizeLetter={capitalizeLetter}
        selectedTable={selectedTable}
      />
      <ConfirmDialog
        confirmationDialogOpen={confirmationDialogOpen}
        setConfirmationDialogOpen={setConfirmationDialogOpen}
        paymentMethod={paymentMethod}
        total={total}
        handleConfirmPayment={handleConfirmPayment}
      />
    </Box>


  )
}

export default Receipt
