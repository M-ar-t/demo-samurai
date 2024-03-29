import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Profile from './components/Profile/Profile';
import { inizializeApp } from './components/redux/app-reducer';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from './components/MainContent/MainContentContainer';
import Preloader from './components/common/preloader/Preloader';
import { HashRouter} from 'react-router-dom';
import store from './components/redux/redux-store';
import { Provider } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    this.props.inizializeApp()
  }
  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
    
    return <div className = 'app-wrapper'>
    <HeaderContainer/>
    <Profile />
  </div>
  }
}
const mapStateToProps = (state) =>({
initialized: state.app.inizialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {inizializeApp}))(App)

const AppSamuraiJS = (props) =>{
return <React.StrictMode>
         <HashRouter>
            <Provider store = {store} >
                 <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default AppSamuraiJS
