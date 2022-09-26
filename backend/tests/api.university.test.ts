import { describe, expect, test } from '@jest/globals';
import axios from 'axios'
import { searchUniversities } from '../src/api/university/handlers';
import mock_response from './universities_mock_response.json'

describe('University APIs Testing', () => {

  test('Get universities by name: returns unique objects ordered', async () => {

    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 200,
      data: mock_response
    });

    const expected_result = [
      {
        "country": "Egypt",
        "name": "American University in Cairo"
      },
      {
        "country": "Egypt",
        "name": "Cairo University"
      },
      {
        "country": "Egypt",
        "name": "German University in Cairo"
      }
    ]
    const data = await searchUniversities('Cairo', 'ASC')
    expect(data).toEqual(expected_result);

  })

})