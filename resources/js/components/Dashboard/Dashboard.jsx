import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Label, Input } from 'semantic-ui-react';

function handleSubmit(event, route) {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch(`/api/${route}`, {
    method: 'POST',
    body: data,
  })
  .then(response => response.json())
  .then((response) => console.log(response));
}


function Dashboard() {
  return (
    <>
    <Container>
    <form className="ui form" onSubmit={(event) => handleSubmit(event, 'add-section')}>
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
    
    // name, order, image, source, demo, demo_text, description
      <form className="ui form" onSubmit={(event) => handleSubmit(event, 'add-project')}>
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
          <input type="text" name="demo" />
        </div>

        <div className="field">
        <label>Demo Text</label>
          <input type="text" name="demo_text" />
        </div>

        <div className="field">
        <label>Source Link</label>
          <input type="text" name="source" />
        </div>

        <div className="field">
        <label>Description</label>
          <textarea name="description" />
        </div>

        <div className="field">
        <label>Image</label>
          <input type="file" name="image" />
        </div>
        <div className="field">
          <label>Belongs to</label>
          <select name="section">
                { sections.map(section => <option key={section.id} value={section.id}>{section.name}</option>) }
            </select>
        </div>

        <input type="submit" value="Submit" />
      </form>
  );
}

if (document.getElementById('dashboard')) {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}

export default Dashboard;
