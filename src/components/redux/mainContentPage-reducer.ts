import { NewLifecycle } from "react";
import {
  stopSubmit
} from "redux-form";
import {
  profileAPI,
  usersAPI
} from "../../api/api";
import { contactsType, photosType, postDataType, profileType } from "../../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_CONTACT_DATA_SUCCESS = 'SAVE_CONTACT_DATA_SUCCESS';



let initialState = {
  postData: [{
    id: 1,
    message: 'Hi, how are you',
    likesCount: 12,
    img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'
  },
  {
    id: 2,
    message: 'It\'s my first post',
    likesCount: 3,
    img: 'https://kartiny-po-nomeram.ru/assets/images/catalog/12648/ag004.jpg'
  },
  {
    id: 3,
    message: 'Yoeg',
    likesCount: 8,
    img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
  },
  {
    id: 4,
    message: 'srbnng',
    likesCount: 8,
    img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
  },
  {
    id: 5,
    message: 'LKGCjgv',
    likesCount: 8,
    img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
  },
  {
    id: 6,
    message: 'JTcxjhk',
    likesCount: 8,
    img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
  },
  ] as Array <postDataType>,
  profile: null as profileType | null,
  status: "",
  contactDataRecieveSuccess: false,
  newPostText: ""
};

type initialStateType = typeof initialState
export const mainContentReducer = (state = initialState, action:any):initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
        img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg'

      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: '',
      }
    }
    case SET_USER_PROFILE: {

      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter(el => el.id !== action.id)

      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        } as profileType

      };
    }
    case SAVE_CONTACT_DATA_SUCCESS: {
      return {
        ...state,
        contactDataRecieveSuccess: true,
        ...action.data
      };
    }
    default:
      return state
  }
}
type addPostActionCreatorActionType = {
  type: typeof ADD_POST,
  newPostText: string
}
type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: profileType
}
export const addPostActionCreator = (newPostText:string):addPostActionCreatorActionType => ({
  type: ADD_POST,
  newPostText
})
type delPostActionCreatorActionType = {
  type: typeof DELETE_POST,
  id: number
}
export const delPostActionCreator = (id:number):delPostActionCreatorActionType => ({
  type: DELETE_POST,
  id
})

export const setUserProfile = (profile:profileType):setUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile

})
type setStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}
export const setStatus = (status:string) :setStatusActionType=> ({
  type: SET_STATUS,
  status
})
type savePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: photosType
}
export const savePhotoSuccess = (photos:photosType):savePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})
type dataType = {
  lookingForAJob: string,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: contactsType,
  aboutMe:string
}
type saveContactDatSuccessctionType = {
  type: typeof SAVE_CONTACT_DATA_SUCCESS,
  data: dataType
}

export const saveContactDatSuccess = (contacts:contactsType, aboutMe:string, lookingForAJob:string, lookingForAJobDescription:string, fullName:string):saveContactDatSuccessctionType=> ({
  type: SAVE_CONTACT_DATA_SUCCESS,
  data: {
    contacts,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    fullName
  }
})

export const userProfileRecieved = (userId:number) => async (dispatch:any) => {
  let data = await usersAPI.getUserProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId:number) => async (dispatch:any) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const updateStatus = (status:string) => async (dispatch:any) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (file) => async (dispatch:any) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveContactData = (contacts:contactsType, aboutMe:string, lookingForAJob = 'false', lookingForAJobDescription:string, fullName:string) =>
  async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveContactData(contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName)
    if (response.data.resultCode === 0) {
      dispatch(saveContactDatSuccess(contacts, aboutMe, lookingForAJob, lookingForAJobDescription, fullName))
      dispatch(userProfileRecieved(userId))

    } else {
      dispatch(stopSubmit("contactData", {
        "contacts": {
          [response.data.messages[0].split('>')[1].split(')')[0].toLowerCase()]: response.data.messages[0]
        }
      }))
      // return Promise.reject(response.data.messages[0])
    }
  }

export default mainContentReducer