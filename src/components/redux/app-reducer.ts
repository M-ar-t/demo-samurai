import { getAuthUserData } from "./auth-reducer";

const INIZIALIZED_SUCCESS = 'INIZIALIZED_SUCCESS';

export type initialStateType = {
    inizialized:boolean
};
let initialState: initialStateType = {
    inizialized:false
};

export const AppReducer = (state = initialState, action:any):initialStateType => {
 
    switch (action.type) { 
        case INIZIALIZED_SUCCESS: {
            return {
                ...state,
                inizialized: true,
            };
        }
        default:
            return state
    }
}

type inizializedSuccessActionType = {
    type: typeof INIZIALIZED_SUCCESS
}

export const inizializedSuccess = ():inizializedSuccessActionType => ({
    type: INIZIALIZED_SUCCESS,
})

export const inizializeApp = () =>(dispatch:any) =>{
    let promise = dispatch(getAuthUserData())
    promise.then(() =>{
        dispatch(inizializedSuccess())
    })

}


