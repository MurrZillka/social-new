import * as React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/mesage";

const Dialogs = ({dialogsData, messagesData}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsData.map((item) => <DialogItem name={item.name}
                                                       path={item.id}
                                                       key={item.id}/>)}
            </div>
            <div className={s.dialogs__messages}>
                {messagesData.map((item) => <Message message={item.message}
                                                     key={item.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs;