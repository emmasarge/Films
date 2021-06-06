import React from 'react';


function Modal(props){
    return(props.trigger) ? (
        <>
        <div className="Modal">modal
        <div className='innerModal'>
            <button className="close-btn">close</button>
            { props.children } 
            </div></div>
        </>
    ): "";
};

export default Modal;