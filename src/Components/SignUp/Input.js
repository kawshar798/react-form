import React from 'react'
import PropTypes from "prop-types";

const Input = (props) =>(
    
<div className="form-group">
<label htmlFor={props.name}>{props.label}</label>
    <input 
    type={props.type}
    name={props.name} 
    id={props.name}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    className={props.error ? 'form-control is-invalid' : 'form-control'}

    />
    {
        props.error && <div className='invalid-feedback'>{props.error}</div>
    }
    </div>
)
Input.propTypes = {
    name: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label:PropTypes.string.isRequired,
    error:PropTypes.string
}
export default Input;

