import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Message from '../Message';

class ProjectForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id: '',
          name: '',
          order: 1,
          demo: '',
          demo_text: '',
          description: '',
          image: '',
          source: '',
          section_id: 2,
          inputKey: '',
          message: '',
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleProjectChange = this.handleProjectChange.bind(this);
      this.handleFormReset = this.handleFormReset.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value,
        });
    }

    handleSubmit(event) {
      event.preventDefault();
      let formData =  new FormData(event.target);
      let projectID = this.state.id;
      let api = '/api/projects' + (projectID ? `/${projectID}`: '' );
      axios.post(api, formData)
        .then(response => {
          this.setState({
            message: response.data.message,
            updated: response.data.success,
          });
        });
    }

    handleDelete(e) {
      const projectID = this.state.id;
      axios.get(`/api/projects/${projectID}/delete`)
          .then(response => {
              let deleted = response.data;
              this.setState({
                  message:deleted.message,
                  updated: deleted.success
              });
          });
  }

    handleFormReset() {
      this.setState({
        id: '',
        name: '',
        order: 1,
        demo: '',
        demo_text: '',
        description: '',
        image: '',
        source: '',
        section_id: '',
        inputKey: Date.now(), // Force the input field to rerender
        message: '',
        updated: false,
      });
    }

    handleProjectChange(event) {
      var projectID = event.target.value;
      if (!projectID) {
        this.handleFormReset();
        return;
      }
      axios.get(`/api/projects/${projectID}`)
        .then(res => {
          let project = res.data;
          this.setState({
            id: project.id || '',
            name: project.name || '',
            order: project.order || '',
            demo: project.demo || '',
            demo_text: project.demo_text || '',
            description: project.description || '',
            image: project.image || '',
            source: project.source || '',
            section_id: project.section_id || '',
            inputKey: Date.now(),
            message: '',
          });
        });
    }

    render() {
        let optionItems = sections.map((section) =>
          <option value={section.id} key={section.name}>{section.name}</option>
        );

        let deleteButton = this.state.id
          ? <button type="button" onClick={this.handleDelete}>Delete</button>
          : '';
        return (
          <>
          <>
            <Message message={this.state.message} updated={this.state.updated}/>
          </>
          <>
            <ProjectDropDown callback={this.handleProjectChange} />
          </>
          <>
          <input readOnly value={this.state.id} type="hidden" name="id" />
          <form className="ui form" onSubmit={(event) => this.handleSubmit(event)}>
            <div className="field">
              <label>Name</label>
              <input value = {this.state.name} onChange={(event) => this.handleInputChange(event)} type="text" name="name" />
            </div>
  
        <div className="field">
        <label>Order</label>
          <input value = {this.state.order} onChange={(event) => this.handleInputChange(event)} type="number" name="order" />
        </div>

        <div className="field">
        <label>Demo Link</label>
          <input value = {this.state.demo} onChange={(event) => this.handleInputChange(event)} type="text" name="demo" />
        </div>

        <div className="field">
        <label>Demo Text</label>
          <input value = {this.state.demoText} onChange={(event) => this.handleInputChange(event)} type="text" name="demo_text" />
        </div>

        <div className="field">
        <label>Source Link</label>
          <input value = {this.state.source} onChange={(event) => this.handleInputChange(event)} type="text" name="source" />
        </div>

        <div className="field">
        <label>Description</label>
          <textarea value = {this.state.description} onChange={(event) => this.handleInputChange(event)} name="description" />
        </div>

        <div className="field">
        <label>Image</label>
          {
            this.state.image 
              ? (<img src={`../../../images/project_thumbnails/${this.state.image}`}/>)
              : ('')
          }
          <input type="file" name="image" key={this.state.inputKey}/>
        </div>
        <div className="field">
          <label>Belongs to</label>
          <select name="section_id" onChange={(event) => this.handleInputChange(event)}>
            {optionItems}
            </select>
        </div>

        <input type="submit" value="Submit" />
        {deleteButton}
      </form>
      </>
      </>
        );
    }
}

function ProjectDropDown(props) {
  let {callback} = props;
  return (
    <div className="field">
      <select name="project" onChange={(e) => props.callback(e, callback)}>  
        <option value="">New Project</option>
        { projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>) }
      </select>
    </div>
  );
}

if (document.getElementById('project')) {
  ReactDOM.render(<ProjectForm />, document.getElementById('project'));
}

export default ProjectForm;