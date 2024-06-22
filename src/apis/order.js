/* eslint-disable no-console */
import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/orders'

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/order`)
    return response.data.map((order) => ({
      orderId: order.orderId,
      total: order.total,
      tableName: order.tableName,
      time: order.time,
      orderNumber: order.orderNumber
    }))
  } catch (error) {
    console.error('Error fetching orders:', error)
    return []
  }
}

export const searchOrder = async (orderNumber) => {
  try {
    const response = await axios.get(`${API_URL}/search/orderNumber/${orderNumber}`)
    console.log('API Response:', response) // Debug log
    return response.data
  } catch (error) {
    console.error('Error searching for order:', error)
    return []
  }
}

export const searchOrderByTable = async (tableName) => {
  try {
    const response = await axios.get(`${API_URL}/search/tableName/${tableName}`)
    console.log('API Response:', response) // Debug log
    return response.data
  } catch (error) {
    console.error('Error searching for order:', error)
    return []
  }
}