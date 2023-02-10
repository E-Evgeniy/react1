import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = () => {
   return (
   <div className={s.postBlock}>
     <h3>My post</h3>
     <div>       
       <div>
          <textarea></textarea>
       </div>

       <div>
         <button>Add post</button>
       </div>
       
     </div>

     <div className={s.posts}>
       <Post message = 'Hi, haw are you?'  likesCount = '2' />
       <Post message = "It's my first post" likesCount = '3' />
     </div>

   </div>)
}

export default MyPosts;