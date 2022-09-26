import axios, { AxiosResponse } from 'axios'
import { API_ENDPOINT } from '../../config';
import { University } from './types';

export const searchUniversities = async (name: string, order: string) => {

    const response: AxiosResponse = await axios.get(`${API_ENDPOINT}?name=${name}`)
    const universities : University[] = response.data?.map((university: University)=> {
        return {
          country: university.country,
          name: university.name
        }
    }).filter((university: University, index: number, self: University[]) => index === self.findIndex((item: University) => item.name === university.name))

    if(order.toLowerCase() == 'asc' || order.toLowerCase() == 'desc'){
      universities.sort((a: University, b: University) => {
        if(a.name > b.name) {
          return order.toLowerCase() == 'asc' ? 1 : -1
        }
        if(a.name < b.name) {        
          return order.toLowerCase() == 'asc' ? -1 : 1
        }
        return 0;
      })
    }

    return universities

}