import axios from 'axios'
import { API_ENDPOINT } from '../../config';

const apiService = axios.create({
    baseURL: API_ENDPOINT,
    timeout: 3000,
    headers: {}
  });


export default apiService