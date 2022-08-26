import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const POST_USER_DATA = 'POST_USER_DATA';
// const SHOW_CAPTCHA = 'SHOW_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    captcha:false
};

export const AuthReducer = (state = initialState, action) => {
 
    switch (action.type) { 
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            };
        }
        case POST_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        // case SHOW_CAPTCHA: {
        //     return {
        //         ...state,
        //         captcha: true
        //     };
        // }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data:{userId , email, login, isAuth}
})

export const postUserData = (email, password, rememberMe, captcha) => ({
    type: POST_USER_DATA,
    data:{email, password, rememberMe, captcha}
})
// export const showCaptcha = () => ({
//     type: SHOW_CAPTCHA
// })

export const getAuthUserData =()=> async (dispatch) =>{
    let data = await authAPI.me()
        if (data.resultCode ===0){
           let {id, email, login} = data.data
           dispatch(setAuthUserData(id, email, login, true))
        }
}
export const login =(email, password, rememberMe, captcha)=> async (dispatch) =>{
   let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0){
        dispatch(getAuthUserData())
        }  else{
            let messages = response.data.messages.length>0 ?response.data.messages[0]:"some error"
            dispatch(stopSubmit("login", {_error:messages}))
        }
}
export const logout =()=> async(dispatch) =>{
   let response = await authAPI.logout()
        if (response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false))
        }   
}

export default AuthReducer