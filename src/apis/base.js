import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: 3000,
  withCredentials: true
})