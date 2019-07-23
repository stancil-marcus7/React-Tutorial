import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
         hasError: false,
         errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    //If error presents itself, then you will know in development mode and you won't know in standard deployed mode
    render(){
        if (this.state.hasError){
            return <h1>Something went wrong</h1>
        } else {
            return this.props.children
        }
        
    }
}

export default ErrorBoundary;