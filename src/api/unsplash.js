import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 88eae9b39d87a6a24cf9101eeeda162faf975681e6a72db50213ba6ccf06a440'
  }
});
