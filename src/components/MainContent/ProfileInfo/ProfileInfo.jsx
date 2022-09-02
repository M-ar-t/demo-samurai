import React from 'react';
import Preloader from '../../common/preloader/Preloader'
import s from './ProfileInfo.module.css'
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ContactDataForm from './ContactDataForm';
import { useState } from 'react';

const CurrentData = ({ profile }) => {
  return <div className={s.currentDataDiv}>
    <div><b>Full name: </b>{profile.fullName}</div>
    <div><b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}</div>
    <div><b>About me: </b> {!profile.aboutMe ? "":profile.aboutMe} </div>
    <div><b>Looking for a job decription: </b>{profile.lookingForAJobDescription}</div>
        <div><b>Contacts:</b>
      {Object.keys(profile.contacts)
        .map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}</div>
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileInfo = (props) => {

  let [isEdit, setEdit] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const mainPhotoSelectedOn = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit =async (formData) => {
  await props.contactData(formData.contacts, formData.aboutMe, formData.lookingForAJob, formData.lookingForAJobDescription, formData.fullName)
  props.contactDataRecieveSuccess && setEdit(false)

  }

  const onButtonClickEdit = () => {
    setEdit(true)
  }
  const onButtonClickCancel = () => {
    setEdit(false)
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img alt='' src={props.profile.photos.large || userPhoto} />
        {props.isOwner &&
          <div className={s.divLoad}>
            <label className={s.load}>
              <input type="file" onChange={mainPhotoSelectedOn} />
              New photo
            </label>
          </div>
        }
        <div className={s.divStatus}>
          <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
        </div>
        <div>
          {isEdit ?
            <div>
              <ContactDataForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} />
              <button onClick={onButtonClickCancel}>Cancel</button>
            </div> :
            <div>
              <CurrentData profile={props.profile} />
              <button onClick={onButtonClickEdit}>Edit</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
