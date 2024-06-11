/* eslint-disable no-console */
import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/menu'

export const getPhoBoMenu = async () => {
  try {
    const response = await axios.get(`${API_URL}/PhoBoMenu`)
    const data = response.data.map((item) => ({
      ...item,
      itemImage: item.itemImage ? `data:image/png;base64,${item.itemImage}` : null
    }))
    return data
  } catch (error) {
    console.error('There was an error fetching the menu!', error)
    throw error
  }
}

export const getPhoGaMenu = async () => {
  try {
    const response = await axios.get(`${API_URL}/PhoGaMenu`)
    const data = response.data.map((item) => ({
      ...item,
      itemImage: item.itemImage ? `data:image/png;base64,${item.itemImage}` : null
    }))
    return data
  } catch (error) {
    console.error('There was an error fetching the menu!', error)
    throw error
  }
}
