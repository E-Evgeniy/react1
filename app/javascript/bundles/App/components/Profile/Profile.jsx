import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
   return <div>
   <div>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26OBBY0pJdQ7HK9dQh1nEaVaQnnGyLudOwOdoD_znhQfVNnrGqm-O5q-GXq_DOX2zORI&usqp=CAU' />
   </div>

   <div>
     ava + desc          
   </div>
  <MyPosts />
 </div>
}

export default Profile;