import React from 'react';
import mp from './Post.module.css'

const Post  = (props) =>{
     return  (
       <div className={mp.item}>
         <img alt = '' src={props.img}/>
         {props.message}
         <div>
           <span>like {props.count}</span>
         </div>
       </div>
      ) 
 }
 export default Post;
