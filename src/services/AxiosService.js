import axios from 'axios';
export const apiNASA = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 5000
})