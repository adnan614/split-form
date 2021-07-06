import React from 'react'
import PropTypes from 'prop-types'

import Form from './form'



// TextInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// }

// TextInput.defaultProps = {
//     type: 'text',
//     label:''
// }





class App extends React.Component{

    state = {
        name: '',
        email: '',
        password:''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value  
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state);
        event.target.reset();
        this.setState({name:'',email:'',password:''})
    }
    
    render() {
        
        return (
            <div className="container col-md-6">
                <h1 style={{textAlign: 'center'}}>Split Form</h1>
                <br />
                <Form
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                
                />
            </div>
        )
    }
}

export default App;