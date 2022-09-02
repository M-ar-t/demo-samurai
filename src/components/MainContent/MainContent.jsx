import React from 'react';
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const MainContent = (props) => {

  return (
    <div>
      <ProfileInfo 
      contactData = {props.contactData}
      savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus}
        profile={props.profile} 
        contactDataRecieveSuccess = {props.contactDataRecieveSuccess}/>
      <MyPostsContainer />
    </div>
  )
}
export default MainContent;
