import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const setActive = (({ isActive }) =>
isActive ? s.active : undefined)

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return <div >
        <NavLink to={path} className={setActive}> {props.name} </NavLink>
    </div>
}


export default DialogItem;