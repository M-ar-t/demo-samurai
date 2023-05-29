import React from 'react';
import MainContent from './MainContent';
import { connect } from "react-redux";
import { userProfileRecieved, getStatus, updateStatus, savePhoto, saveContactData } from "../redux/mainContentPage-reducer"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from "redux"
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

class MainContentContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId

      if (!userId) {
        withAuthRedirect(MainContentContainer)
      }
    }
    this.props.userProfileRecieved(userId)
    this.props.getStatus(userId)
  }
  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile()
    }
  }
  render() {

    return (
      <MainContent {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} 
        savePhoto = {this.props.savePhoto}
        contactData = {this.props.saveContactData}
        contactDataRecieveSuccess = {this.props.contactDataRecieveSuccess}/>
    )
  }
}

let mapStateToProps = (state) => ({

  profile: state.mainContentPage.profile,
  status: state.mainContentPage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  contactDataRecieveSuccess: state.mainContentPage.contactDataRecieveSuccess
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
  connect(mapStateToProps, { userProfileRecieved, getStatus, updateStatus, savePhoto, saveContactData}),
  withRouter
)(MainContentContainer)
