import { SERVERIP_BACKEND } from '../constants/config'

export function ApiGetUser(payload) {
  return(
    fetch(
      `http://${SERVERIP_BACKEND}/api/v1.0/user/${payload.user}/` ,

      {
        accept: 'application/json',
        method: 'GET',
      }
    ).then((response) => {
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