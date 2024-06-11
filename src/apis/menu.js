/* eslint-disable no-console */
import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/menu' // Ensure this is the correct URL to your Flask API

export const getMenu = async () => {
  try {
    const response = await axios.get(`${API_URL}/PhoBoMenu`)
    return response.data
  } catch (error) {
    console.error('There was an error fetching the menu!', error)
    throw error
  }
}
