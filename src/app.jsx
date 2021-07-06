import React from 'react' 

// import App from './components/index'

import SignupForm from './components/signup-form/index'


class app extends React.Component{


    render() {
        
        return (
            <div className=" container col-md-6">
               
                {/* <App /> */}
                
                <SignupForm />
            </div>
        );
    }
}

export default app;