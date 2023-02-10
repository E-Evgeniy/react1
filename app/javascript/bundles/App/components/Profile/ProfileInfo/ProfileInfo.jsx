import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26OBBY0pJdQ7HK9dQh1nEaVaQnnGyLudOwOdoD_znhQfVNnrGqm-O5q-GXq_DOX2zORI&usqp=CAU' />
      </div>

      <div className={s.descriptionBlock}>
        ava + desc          
      </div>
 </div>
   )
}

export default ProfileInfo;