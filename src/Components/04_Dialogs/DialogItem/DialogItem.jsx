import * as React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = ({name, path}) => {
    return (
        <div className={s.dialogs__item + ' ' + s.dialogs__itemActive}>
            <NavLink to={`${path}`}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;