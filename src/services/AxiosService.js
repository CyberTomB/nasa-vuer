import axios from 'axios';
export const apiNASA = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=bQzL1qV3LisdFxR03P6dYx42Ow57uazIX9MooXmL',
  timeout: 5000
})