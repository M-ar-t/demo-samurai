import Navbar from './Navbar';
import { connect } from 'react-redux/es/exports';

let mapStateToProps = (state) =>{
  return {
    sidebar: state.sidebar.sidebar,
    authorizedUserId: state.auth.userId,
  }
}
let mapDispathToProps = () =>{
return {
    
  }
}
let NavbarContainer = connect(mapStateToProps, mapDispathToProps)(Navbar)
export default NavbarContainer;
