import React from "react";
import PropTypes from 'prop-types';

const Input = (props) => (
<div className="form-group">
<label htmlFor={props.name}>{props.label}</label>
    <input 
    className="form-control"
    name={props.name}
    placeholder={props.placeholder}
    id={props.name}
    type={props.type}
    value={props.value}
    onChange={props.onChange}
     />
</div>
)

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Input;