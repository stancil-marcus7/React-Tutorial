import React from 'react';


//Well use this higher order component to have a div with a class as a prop
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* {...props} is all of the props of the Component that uses withClass */}
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;