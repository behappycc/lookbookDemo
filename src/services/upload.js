export function ApiUploadUser(payload) {
  return(
    fetch(
      'http://localhost:8000/uplaod/',
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
        console.log(error);
        throw error;
      }
    }).then((response) => {
      const data = response.json();
      return data;
    })
  )
}
