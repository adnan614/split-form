import React from 'react'

import TextInput from './text-input'


const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
                    
            name='name'
            label='enter name'
            placeholder='enter name'
            value={props.values.name}
            onChange={props.handleChange}
                        
                    
                    
        />
        <TextInput
                    
            name='email'
            label='enter email'
            placeholder='enter email'
            value={props.values.email}
            onChange={props.handleChange}
                        
                    
                    
        />
        <TextInput
                    
            name='password'
            label='enter password'
            placeholder='*****'
            value={props.values.password}
            onChange={props.handleChange}
                        
                    
                    
        />

        <button type="submit">Submit</button>
    </form>
    
);

export default Form;