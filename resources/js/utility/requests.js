export const request = (event, route, method='POST') => {
    event.preventDefault();
    debugger;
    let request = {method: method};
    if (method === 'POST') {
      request.body = new FormData(event.target);
    }
    fetch(`/api/${route}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function(response) {
      return response.json();
    });
};