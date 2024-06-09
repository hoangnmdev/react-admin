import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/auth' // Change this to your Flask API URL

export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData)
}

export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData)
}
