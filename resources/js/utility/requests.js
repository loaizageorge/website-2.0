export const request = (event, route) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(`/api/${route}`, {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then((response) => console.log(response));
};