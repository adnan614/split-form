import React from 'react'


const TextInput = props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
         <input
                     
            className='form-control'
            type={props.type }
            placeholder={props.placeholder }
            name={props.name }
            id={props.name }
            value={props.value}
            onChange={props.onChange }
                        
                    
            />
        
     </div>
);

export default TextInput;