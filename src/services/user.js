export function ApiGetUser(payload) {
  console.log(payload)
  console.log(`http://localhost:8000/api/v1.0/user/${payload.user}`)
  return(
    fetch(
      `http://127.0.0.1:8000/api/v1.0/user/${payload.user}/` ,
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
        console.log(error);
        throw error;
      }
    }).then((response) => {
      const data = response.json();
      return data;
    })
  )
}