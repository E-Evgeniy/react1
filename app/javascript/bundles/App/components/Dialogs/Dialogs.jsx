import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const setActive = (({ isActive }) =>
isActive ? s.active : undefined)

let dialogs = [
    {id: 1, name: 'Peter'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Eva'},
    {id: 4, name: 'Anna'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Bye'}
]

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id

    return <div >
        <NavLink to={path} className={setActive}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}> {props.message}</div>
}

let dialogsElements = dialogs
    .map( d => <DialogsItem name = {d.name} id={d.id} />);

let messagesElements = messages
    .map( m => <Message message = {m.message} />);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>     
            {dialogsElements}     
          </div>

          <div className={s.messages}>
            {messagesElements}
          </div>
        </div>
    )
}

export default Dialogs;