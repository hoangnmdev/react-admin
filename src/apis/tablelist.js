/* eslint-disable no-console */
import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/table' // Ensure this is the correct URL to your Flask API

export const getTableList = async () => {
  try {
    const response = await axios.get(`${API_URL}/table list`)
    return response.data
  } catch (error) {
    console.error('There was an error fetching the tables!', error)
    throw error
  }
}
