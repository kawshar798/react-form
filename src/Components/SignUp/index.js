import React, { Component } from 'react'
import Form from '../SignUp/Form';
import '../form/form-style.css';


const initForm = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
};


class SignUpForm extends Component {

    state = {
        values: initForm,
        agree: false,
        errors: {},
        users: []
    }

    handleChanged = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    handleAgree = (event) => {

        this.setState({
            agree: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { isValid, errors } = this.validate();


        if (isValid) {
        
          
            this.createUser(this.state.values)
            event.target.reset();
            this.setState({
                values: initForm,
                agree: false,
                errors: {}
            })
        } else {
            this.setState({ errors })
            console.log(errors);
        }



    }
        createUser = user => {
            user.id = new Date().getTime().toString();
            this.setState({
            users:[...this.state.users,user]
            })
        }
    validate = () => {
        const errors = {}
        const { values: { name, email, password, gender, birthDate } } = this.state;
        if (!name) {
            errors.name = "Please Provide Your Name"
        }
        if (!email) {
            errors.email = "Please Provide Your Email";
        }
        if (!password) {
            errors.password = "Please Provide Your Password";
        }
        if (!birthDate) {
            errors.birthDate = "Please Provide Your Birth Date";
        }
        if (!gender) {
            errors.gender = "Please Provide Your Gender";
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="form-area">
                        <h2 className="title">Sign Up form</h2>
                        <hr />
                        <Form
                            values={this.state.values}
                            // agreement = {this.state.agreement}
                            agree={this.state.agree}
                            handleChanged={this.handleChanged}
                            handleAgree={this.handleAgree}
                            handleSubmit={this.handleSubmit}
                            errors={this.state.errors}
                        />
                        {
                            this.state.users !== "" &&
                            <div className="user_list">
                                <h4 className="mt-3">User List</h4>
                                <hr />
                             
                                <ul className="list-group">
                                    {
                                        this.state.users.map(item => (
                                            <li key={item.id} className="list-group-item">
                                                {item.name} - {item.email}
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUpForm;
