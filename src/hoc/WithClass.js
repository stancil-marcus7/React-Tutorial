import React from 'react';


//Well use this higher order component to have a div with a class as a prop
const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;