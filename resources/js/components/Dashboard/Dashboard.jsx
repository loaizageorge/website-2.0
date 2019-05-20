import React from 'react';
import ReactDOM from 'react-dom';
import ProjectForm from './ProjectForm'
import {request} from '../../utility/requests.js';
import { Container, Label, Input } from 'semantic-ui-react';

function handleSubmit(event, route) {
  request(event, route);
}

function handleProjectChange(e, callback) {
  let state = {
    [e.target.name]: e.target.value,
    view: 'project'
  };
  callback(state);
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'project',
      section: null,
      project: null,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state, e) {
    this.setState(state);
  }

  handleToggle(view, e) {
    this.setState({
      show: view
    });
  }

  render(){
    let show = <AddSection/>;
    const view = 'project';//this.state.show;
    switch(view) {
      case 'add-section':
        show = <AddSection/>;
        break;
      case 'edit-section':
        show = <EditSection/>;
        break;
      case 'project':
        show = <ProjectForm id={this.state.project}/>;
        break;  
      default: <AddProject/>;
   }
    return (
      <>
      <div className="dashboard__section">
        Section<i onClick={(e) => this.handleToggle('add-section', e)} className="fas fa-plus-circle"/>
      </div>
      <div className="dashboard__project">
        Project<i onClick={(e) => this.handleToggle('add-project', e)} className="fas fa-plus-circle"/>
        <ProjectDropDown callback={this.handleStateChange}/>
      </div>

      <>
      {show}
      </>
      {/* <Container> 
        <ProjectDropDown/>
      </Container>

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
      </Container> */}
      </>
    );
  }
}

function ProjectDropDown(props) {
  let {callback} = props;
  return (
    <div className="field">
      <select name="project" onChange={(e) => handleProjectChange(e, callback)}>  
        <option value="">New Project</option>
        { projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>) }
      </select>
    </div>
  );
}

function AddSection() {
  return (
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
  );
}

function AddProject() {
  return (
    <>
      {<ProjectForm/>}
    </>
  )
}

function EditProject(project) {
  return (
    <>
      {<ProjectForm project={project} />}
    </>
  )
}
/*
function ProjectForm(props) {
  let {project} = props;
  return (    
    // name, order, image, source, demo, demo_text, description
      <form className="ui form" onSubmit={(event) => handleSubmit(event, 'add-project')}>
        <div className="field">
        <label>Name</label>
          <input defaultValue = '' value = {project ? project.name : ''} type="text" name="name" />
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
          <select name="section_id">
                { sections.map(section => <option key={section.id} value={section.id}>{section.name}</option>) }
            </select>
        </div>

        <input type="submit" value="Submit" />
      </form>
  );
}
*/
if (document.getElementById('dashboard')) {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}

export default Dashboard;
