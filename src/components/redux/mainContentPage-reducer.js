import {
  profileAPI,
  usersAPI
} from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


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
  ],
  profile: null,
  status: ""
};

export const mainContentReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText
})
export const delPostActionCreator = (id) => ({
  type: DELETE_POST,
  id
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile

})
export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const userProfileRecieved = (userId) => async (dispatch) => {
  let data = await usersAPI.getUserProfile(userId)
  dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default mainContentReducer