import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header  = (props) =>{
  
     return <header className = {h.header}>
      <img alt = '' src='https://pluspng.com/img-png/wwf-logo-png-wwf-logos-brands-and-logotypes-3030x3362.png'/>
   <div className={h.loginBlock}>
  {props.isAuth
   ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
   : <NavLink to={'/login'}>Login</NavLink>
 }
  </div>
 
    </header>
 }
 export default Header;
