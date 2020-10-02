const requestUrl = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.responseType ='json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = () => {
      if(xhr.status >= 400) {
        reject(xhr.response);
        return
      }
      resolve(xhr.response)
    }
    
    xhr.onerror = () => reject(xhr.response)
    xhr.send(JSON.stringify(body))
  })
}

sendRequest('GET', requestUrl)
  .then(data => console.log(data))
  .then(()=> {
    const body = {
      name: 'Andrey',
      age: 27
    }
    sendRequest('POST', requestUrl, body)
      .then(data => console.log(data))
      .catch(error => console.error(error))
  })
  .catch(error => console.error(error))
  

    
