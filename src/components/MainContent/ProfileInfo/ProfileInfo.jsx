import React from 'react';
import Preloader from '../../common/preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      
      <div className={s.descriptionBlock}>
   
      {(!props.profile.photos.large) &&  <img alt='' src = {userPhoto}/> }
      {(props.profile.photos.large) &&  <img alt='' src = {props.profile.photos.large}/> }

        <ProfileStatusWithHooks updateStatus = {props.updateStatus} status ={props.status}/>
          </div>
    </div>
  )
}
export default ProfileInfo;
