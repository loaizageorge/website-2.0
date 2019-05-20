import React from 'react';
import ReactDOM from 'react-dom';
import {request} from '../../utility/requests.js';

class ProjectForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id: props.project,
          name: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        console.log('component did mount');
        this.setState({id: this.props.project});
    }

    handleChange(event, stateName) {
        let state = {stateName: event.target.value};
        this.setState(state);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value,
        });
    }

    handleSubmit(event, route) {
        request(event, route);
    }

    render() {
        console.log(this.state);
        return (
            <form className="ui form" onSubmit={(event) => handleSubmit(event, 'add-project')}>
        <div className="field">
        <label>Name</label>
          <input value = {this.state.name} onChange={(event) => this.handleChange(event, 'name')} type="text" name="name" />
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
}

export default ProjectForm;