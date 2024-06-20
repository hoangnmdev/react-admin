/* eslint-disable no-console */
import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/payment'

export const postPaymentStatus = async (receiptDetails, setShowReceipt, selectedTable, selectedTip) => {
  try {
    const response = await axios.post(`${API_URL}/paymentstatus`, {
      table: selectedTable.tableName,
      itemName: receiptDetails.item.map(item => item.itemName).join(', '), // Adjust as needed
      price: receiptDetails.item.reduce((total, item) => total + item.unitPrice * item.quantity, 0).toFixed(3),
      quantity: receiptDetails.item.reduce((total, item) => total + item.quantity, 0),
      subtotal: (receiptDetails.subTotal).toFixed(3),
      serviceCharge: (receiptDetails.serviceCharge).toFixed(3),
      total: (receiptDetails.total).toFixed(3),
      date: new Date().toLocaleString('en-GB', { hour12: false }),
      orderId: selectedTable.orderId
    })
    console.log(response.data)
    setShowReceipt(false) // Close the dialog on success
  } catch (error) {
    console.error('There was an error processing the payment!', error)
  }
}
