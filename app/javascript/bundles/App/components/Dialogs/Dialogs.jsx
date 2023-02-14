import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

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

let dialogsElements = dialogs
    .map( d => <DialogItem name = {d.name} id={d.id} />);

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