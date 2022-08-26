import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';
import Friend from './Friends/Friends';

const Navbar = (props) => {
  let state = props.sidebar
  let MyFriends = state.map(p => <Friend name={p.name} img={p.img} key ={p.id}/>)
  return (
    <nav className={n.nav}>
      <div className={n.change}>
        <div className={n.item}>
          <NavLink to='/maincontent' className={navData => navData.isActive ? n.active : n.item}>Profile</NavLink>
        </div>
        <div className={n.item}>
          <NavLink to='/dialogs' className={navData => navData.isActive ? n.active : n.item}>Messages</NavLink>
        </div>
        <div className={n.item}>
          <NavLink to='/users' className={navData => navData.isActive ? n.active : n.item}>Users</NavLink>
        </div>
        <div className={n.item}>
          <NavLink to='/news' className={navData => navData.isActive ? n.active : n.item}>News</NavLink>
        </div>
        <div className={n.item}>
          <NavLink to='/music' className={navData => navData.isActive ? n.active : n.item}>Music</NavLink>
        </div>
        <div className={n.item}>
          <NavLink to='/settings' className={navData => navData.isActive ? n.active : n.item}><div className={n.Set}>Settings</div></NavLink>
        </div>
      </div>
      <div className={n.friends}>
      <p className={n.caption}>FRIENDS</p>
      <div className={n.nameAva}>
        {MyFriends} 
      </div>
    </div>
    </nav>
  )
}
export default Navbar;
