import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

let posts = [
  {id: 1, message: 'Hi, haw are you?', likesCount: '2'},
  {id: 2, message: "It's my first post", likesCount: '3'}
]


let postElements = posts
    .map( p => <Post message = {p.message} likesCount={p.likesCount} />);


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
       {postElements}
     </div>

   </div>)
}

export default MyPosts;