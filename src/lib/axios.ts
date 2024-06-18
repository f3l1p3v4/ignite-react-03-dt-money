import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://ignite-react-03-dt-money.vercel.app/api',
})
