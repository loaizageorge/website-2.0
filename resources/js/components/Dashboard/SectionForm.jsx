import React from 'react';
import ReactDOM from 'react-dom';
import SelectDropDown from '../SelectDropDown';
import Message from '../Message';

class SectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            order: 1,

            updated: false,
            message: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSectionChange = this.handleSectionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleDelete(e) {
        const sectionID = this.state.id;
        axios.get(`/api/sections/${sectionID}/delete`)
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
            message: '',
            updating: false
        });
    }

    handleSectionChange(event) {
        var sectionID = event.target.value;
        if (!sectionID) {
            this.handleFormReset();
            return;
        }
        axios.get(`/api/sections/${sectionID}`)
            .then(response => {
                let section = response.data;
                this.setState({
                    id: section.id,
                    name: section.name,
                    order: section.order,
                    message: '',
                });
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        let formData =  new FormData(event.target);
        let sectionID = this.state.id;
        let api = '/api/sections' + (sectionID ? `/${sectionID}`: '' );
        axios.post(api, formData)
          .then(response => {
            this.setState({
              message: response.data.message,
              updated: response.data.success,
            });
          });
    }



    render() {
        let sectionOptions = sections.map((section) =>
            <option value={section.id} key={section.name}>{section.name}</option>
        );
        sectionOptions.unshift(<option value="" key="">Add section</option>)

        let deleteButton = this.state.id
            ? <button type="button" onClick={this.handleDelete}>Delete</button>
            : '';

        return (
            <>
                <Message message={this.state.message} updated={this.state.updated}/>
                <>
                    <SelectDropDown name="section_id" handleOnChange={this.handleSectionChange} options={sectionOptions}/>
                </>
                <>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <input readOnly value={this.state.id} type="hidden" name="id" />
                
                        <div className="field">
                            <label>Name</label>
                            <input value = {this.state.name} onChange={(event) => this.handleInputChange(event)} type="text" name="name" />
                        </div>
        
                        <div className="field">
                            <label>Order</label>
                            <input value = {this.state.order} onChange={(event) => this.handleInputChange(event)} type="number" name="order" />
                        </div>
                        <input type="submit" value="Submit" />
                        {deleteButton}
                    </form>
                </>
            </>
        );
    }
}

if (document.getElementById('sections')) {
    ReactDOM.render(<SectionForm />, document.getElementById('sections'));
}
  
export default SectionForm;