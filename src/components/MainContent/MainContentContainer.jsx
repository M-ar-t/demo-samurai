import React from 'react';
import MainContent from './MainContent';
import { connect } from "react-redux";
import { userProfileRecieved, getStatus, updateStatus } from "../redux/mainContentPage-reducer"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from "redux"
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class MainContentContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId

      if(!userId){ 
        withAuthRedirect(MainContentContainer)

      }
    }
    this.props.userProfileRecieved(userId)
    this.props.getStatus(userId)
  }
  // componentDidUpdate(){
  //   let userId = this.props.router.params.userId
  //   if (!userId) {
  //     userId =  25383
  //   }
  //   this.props.userProfileRecieved(userId)
  //   this.props.getStatus(userId)
  // }
  render() {

    return (
      <MainContent {...this.props} 
                  profile={this.props.profile} 
                  status={this.props.status} 
                  updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state) => ({

  profile: state.mainContentPage.profile,
  status: state.mainContentPage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export const withRouter = (Component) => {
  let ComponentWithRouterProp = (props) => {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (<Component {...props} router={{ location, navigate, params }} />
    )
  }
  return ComponentWithRouterProp
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { userProfileRecieved, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(MainContentContainer)
