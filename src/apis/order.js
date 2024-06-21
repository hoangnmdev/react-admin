import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/orders'

export const fetchOrders = async (setRows) => {
  try {
    const response = await axios.get(`${API_URL}/order`)
    setRows(response.data.map((order) => ({
      sl: order.orderId,
      total: order.total,
      tableName: order.tableName,
      time: order.time,
      orderNumber: order.orderNumber
    })))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching orders:', error)
  }
}