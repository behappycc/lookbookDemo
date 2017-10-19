import { SERVERIP } from '../constants/config'
import { createFetch, base, method, body, parse } from 'http-client'

const uploadFormData = (form) => createFetch(
  base(`http://${SERVERIP}:8000/upload/`),
  method('POST'),
  body(form),
  parse('json', 'jsonData')
)

export function ApiUploadUser(payload) {
  return(
    uploadFormData(payload['form'])(payload['name'])
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        throw error;
      }
    }).then((response) => {
      const data = response.json();
      return data;
    })
  )
}

