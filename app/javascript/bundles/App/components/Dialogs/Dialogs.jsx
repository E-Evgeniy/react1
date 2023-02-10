import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const setActive = (({ isActive }) =>
isActive ? s.active : undefined)

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path} className={setActive}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>     
            <DialogsItem name = "Peter" id="1" />   
            <DialogsItem name = "Ivan" id="2" /> 
            <DialogsItem name = "Eva" id="3" /> 
            <DialogsItem name = "Anna" id="4" />     
          </div>

          <div className={s.messages}>
            <Message message = "Hi" /> 
            <Message message = "How are you?" />
            <Message message = "Bye" />
          </div>
        </div>
    )
}

export default Dialogs;