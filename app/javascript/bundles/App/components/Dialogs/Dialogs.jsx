import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            <div className={s.dialogs + ' ' + s.active}>
                Peter
            </div>
            <div className={s.dialogs}>
                Ivan
            </div>
            <div className={s.dialogs}>
                Eva
            </div>
            <div className={s.dialogs}>
                Anna
            </div>
          </div>

          <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Hjw are you?</div>
            <div className={s.message}>Bye</div>

          </div>
        </div>
    )
}

export default Dialogs;