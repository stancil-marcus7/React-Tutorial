import React, { useEffect, useRef }  from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

// We used the props from the Cockpit component
const Cockpit = (props) => {
    //Added this ref to click button after everything is rendered so that the Person components already show upon entering the program
    const toggleBtnRef = useRef(null);

    //Runs after every render cycle; can send http requests here
    //Combines componentDidMount and componentDidUpdate
    useEffect(() => {
        // console.log('[Cockpit.js] useEffect');
        // setTimeout(()=> {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        //This tuns BEFORE the main useEffect function runs, but AFTER the (first) render cycle!
        return () => {
            console.log('[Cockpit.js] clean up work in useEffect')
        };
        //If you want UseEffect to run when the component renders the first time
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
    })

    //Use assignedClasses variable to do styling for the button
    //Took this from App.js; will use Cockpit.modules.css to add css to button
    const assignedClasses = [];

    //Used for button class
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }
    
    return(
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            {/* This will join the two classes in the "classes" array */}
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {/*One way of switching names with the click but is not recommended */}
            <button
            ref={toggleBtnRef}
            //Add btnClass here
            className={btnClass} 
            //Using constant variable "style" to give button inline styling
            //Button is used to hide and unhide Person components
            onClick={props.clicked}>Toggle Persons</button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
          </div>
    )
}

//Will prevent component from rendering when it doesn't need to
export default React.memo(Cockpit);