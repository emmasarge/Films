import React from 'react';
import './App.css'

// Modal to pop up with instructions of how site works in 2 seconds of loading page

function Modal(props){
    return(props.trigger) ? (
        <>
        <div className="modal">
        <div className='innerModal'>
            <button className="close-btn"onClick={()=> props.setTrigger(false)}>close</button>
            { props.children } 
            </div>
        </div>
        </>
    ): "";
};

export default Modal;