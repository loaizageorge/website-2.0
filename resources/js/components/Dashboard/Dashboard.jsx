import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Label, Input } from 'semantic-ui-react';

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
    <>
    <Container>
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
      <label>Name</label>
        <input type="text" name="name" />
      </div>

      <div className="field">
      <label>Order</label>
        <input type="number" name="order" />
      </div>

      <div className="field">
      <input type="submit" value="Submit" />
      </div>
    </form>
    </Container>

    <Container>
      <AddProject/>
    </Container>
    </>
  );
}

function AddProject() {
  return (
    // name, order, demo link, demo text, source link, description, image, section
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
        <label>Name</label>
          <input type="text" name="name" />
        </div>
  
        <div className="field">
        <label>Order</label>
          <input type="number" name="order" />
        </div>

        <div className="field">
        <label>Demo Link</label>
          <input type="text" name="demo_link" />
        </div>

        <div className="field">
        <label>Demo Text</label>
          <input type="text" name="demo_text" />
        </div>

        <div className="field">
        <label>Source Link</label>
          <input type="text" name="source_link" />
        </div>

        <div className="field">
        <label>Description</label>
          <textarea name="description" />
        </div>

        <div className="field">
        <label>Image</label>
          <input type="file" name="image" />
        </div>

        <input type="submit" value="Submit" />
      </form>
  );
}

if (document.getElementById('dashboard')) {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}

export default Dashboard;
