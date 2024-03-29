import React, { Suspense } from 'react';
import {Routes, Route,Navigate } from 'react-router-dom';
import Preloader from '../common/preloader/Preloader';
// import DialogsContainer from '../Dialogs/DialogsContainer';
import Login from '../Login/Login';
// import MainContentContainer from '../MainContent/MainContentContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import UsersContainer from '../Users/UsersContainer';
import p from './Profile.module.css';
 
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const MainContentContainer = React.lazy(() => import('../MainContent/MainContentContainer'));

const Profile  = (props) =>{
     return (
     <div className = {p.profile}>   
        <NavbarContainer/>
        <div className ={p.app_wrapper_content}>
          <Suspense fallback = {<div><Preloader/></div>}>
          <Routes>
        <Route path = '/' element = {<Navigate to={'/maincontent'} />}/>
        <Route path = '/dialogs' element = {<DialogsContainer/>}/>
        <Route path = {'/maincontent/:userId'} element = {<MainContentContainer/>}/>
        <Route path = {'/maincontent'} element ={ <Navigate to={'/maincontent/:userId'} />}/>
        <Route path = '/users' element = {<UsersContainer/>}/>   
        <Route path = '/login' element = {<Login/>}/>   
        <Route path = '*' element = {<div className={p.notFound}>404 NOT FOUND</div>}/>   
        </Routes>
          </Suspense> 
        
        </div>
             </div> 
     
     )
 }
 export default Profile;
