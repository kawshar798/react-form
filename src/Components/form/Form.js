import React from 'react';
import Input from "./Input.js";
import PropTypes from 'prop-types';
const Form = (props) =>(
    <form onSubmit={props.handleSubmit}>
    <Input
    type="text"
    label="Enter Name"
    value={props.values.name}
    name="name"
    onChange={props.handleChange}
    placeholder="Enter Name"
    />

    <Input
    type="email"
    label="Enter Email"
    value={props.values.email}
    name="email"
    onChange={props.handleChange}
    placeholder="Enter  Email"
    />

    <Input
    type="password"
    label="Enter Password"
    value={props.values.password}
    name="password"
    placeholder="Enter  Password"
    onChange={props.handleChange}
    />

<button className="btn btn-primary btn-block">Submit</button>
</form>
)
Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Form;