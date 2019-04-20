import React from 'react';
import ReactDOM from 'react-dom';

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  console.log('test');
  fetch('/api/add-section', {
    method: 'POST',
    body: data,
  });
}


function Dashboard() {
  console.log('test');
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
      Name:
        <input type="text" name="name" />
      </label>

      <label htmlFor="order">
      Order:
        <input type="number" name="order" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}
if (document.getElementById('dashboard')) {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}

export default Dashboard;
