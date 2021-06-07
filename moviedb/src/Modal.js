import React from 'react';
import './App.css'


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