import React, { Component } from 'react'
import './form-style.css';
import Input from "../form/Input.js";
import Form from './Form';

 class MainForm extends Component {
     state = {
         name:'',
         email:'',
         password:''
     }
     handleChange = event =>(
        this.setState({
            [event.target.name] : event.target.value
        })
     );
     handleSubmit = event => {
         event.preventDefault()
         console.log(this.state)
    }
    render() {
        // const {name,email,password} = this.state;
        return (
            
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="form-area">
                    <h2 className="title">React Form</h2>
                     <hr/>
                        <Form values={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                     </div>
                    </div>
                </div>
               
           
        )
    }
}
export default MainForm;
