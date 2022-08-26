import { getAuthUserData } from "./auth-reducer";

const INIZIALIZED_SUCCESS = 'INIZIALIZED_SUCCESS';

let initialState = {
    inizialized:false
};

export const AppReducer = (state = initialState, action) => {
 
    switch (action.type) { 
        case INIZIALIZED_SUCCESS: {
            return {
                ...state,
                inizialized: true
            };
        }
        default:
            return state
    }
}

export const inizializedSuccess = () => ({
    type: INIZIALIZED_SUCCESS,
})

export const inizializeApp = () =>(dispatch) =>{
    let promise = dispatch(getAuthUserData())
    promise.then(() =>{
        dispatch(inizializedSuccess())
    })

}


