import React from 'react';
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MainContent = (props) => {

  return (
    <div>
      <ProfileInfo status ={props.status} updateStatus = {props.updateStatus} profile ={props.profile} />
      <MyPostsContainer/>
    </div>
  )
}
export default MainContent;
