import * as React from "react";
import s from "../Dialogs.module.css";


const Message = ({message}) => {
    return (
        <div className={s.dialogs__message}>{message}</div>
    )
}

export default Message;