export function ApiUploadUser(payload) {
  return(
    fetch(
      'http://35.192.228.224:8000/upload/',
      {
        accept: 'application/json',
        method: 'POST',
        body: JSON.stringify(payload)
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

