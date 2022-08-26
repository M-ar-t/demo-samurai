import React from 'react';
import n from './Friends.module.css';

const Friend = (props) => {

  return (
    <div>
      <div className={n.FriendsBlock}><img alt='' src={props.img}/></div>
        <div className={n.FriendsBlock}>{props.name}</div>
    </div>     
  )
}

export default Friend;
 