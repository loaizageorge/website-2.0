export const request = (event, route, method='POST') => {
    event.preventDefault();
    let request = {method: method};
    if (method === 'POST') {
      request.body = new FormData(event.target);
    }
    fetch(`/api/${route}`,request)
    .then(response => response.json());
};