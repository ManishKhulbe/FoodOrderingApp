import React from 'react'
import reactDOM from 'react-dom'
import classes from './Modal.module.css'
const BackDrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClose} ></div>
}
const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement= document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
    {reactDOM.createPortal(<BackDrop onClose={props.onClose}/> , portalElement)}
    {reactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </>
  )
}

export default Modal