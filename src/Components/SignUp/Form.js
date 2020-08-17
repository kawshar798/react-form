import React from 'react'
import PropTypes from "prop-types";
import Input from './Input.js';


 const Form = ({values,handleChanged,agree,handleAgree,handleSubmit,errors}) =>{
     
 return (
     
     <form onSubmit={handleSubmit}>
         <Input 
         name="name"
         type="text"
         label="Name" 
         placeholder="Enter Name"
         value={values.name}
         error={errors.name}
         onChange={handleChanged}
         />

        <Input 
         name="email"
         type="email"
         error={errors.email}
         label="Email" 
         placeholder="Enter Email"
         value={values.email}
           onChange={handleChanged}
         />

         
        <Input 
         name="birthDate"
         type="date"
         error={errors.birthDate}
         label="BirthDate" 
         placeholder="Enter Birth Date"
         value={values.birthDate}
          onChange={handleChanged}
         />
           <Input 
         name="password"
         type="password"
         error={errors.password}
         label="Password" 
         placeholder="Enter Password"
         value={values.password}
          onChange={handleChanged}
         />

        <div className="form-group">
                    <label  className="mr-3">
                        <input 
                        type='radio'
                        name='gender'
                        value="Male"
                        className="mr-2"
                        onChange={handleChanged}
                        />
                        Male
                    </label>
                    <label className="mr-3">
                        <input 
                        type='radio'
                        name='gender'
                        value="Female"
                        className="mr-2"
                        onChange={handleChanged}
                        />
                        Female
                    </label>
                    <label className="mr-3">
                        <input 
                        type='radio'
                        name='gender'
                        value="Other"
                        className="mr-2"
                        onChange={handleChanged}
                        />
                        Other
                    </label>
 { errors.gender &&  <div className='invalid-feedback'>{errors.gender}</div>}
                    </div>

                    <div className="form-group">
                        <label>
                            <input 
                            type="checkbox" 
                            name="agree" 
                            checked={agree} 
                            onChange={handleAgree}
                            className="mr-2"
                             />
                             I agree
                        </label>
                    </div>

                    <button className="btn btn-primary " type="submit" disabled={!agree}>Submit</button>
             </form>
 )
 }

        Form.propTypes = {
            values : PropTypes.object.isRequired,
            agree:PropTypes.bool.isRequired,
            handleChanged:PropTypes.func.isRequired,
            handleAgree:PropTypes.func.isRequired,
            errors:PropTypes.object
        }
export default Form;
