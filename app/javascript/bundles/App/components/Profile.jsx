import React from 'react';
import './Profile.css';

const Profile = () => {
   return <div className='content'>
   <div>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26OBBY0pJdQ7HK9dQh1nEaVaQnnGyLudOwOdoD_znhQfVNnrGqm-O5q-GXq_DOX2zORI&usqp=CAU' />
   </div>

   <div>
     ava + desc          
   </div>

   <div>
     My post
     <div>
       new post
     </div>

     <div className='posts'>
       <div className='item'>
         post 1
       </div>

       <div className='item'>
         post 2
       </div>
     </div>

   </div>
 </div>
}

export default Profile;