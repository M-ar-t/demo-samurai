import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";
import mainContentReducer from "./mainContentPage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import { AppReducer } from "./app-reducer";

let reducers = combineReducers({
    mainContentPage: mainContentReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;