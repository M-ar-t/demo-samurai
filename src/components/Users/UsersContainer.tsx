import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, toggleFollowingProgress, getUsers, follow, unfollow} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux"
import  {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersMap } from "../redux/user-selectors"
import { userType } from "../../types/types";
import { AppStateType } from "../redux/redux-store";

type PropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalUsersCount:number
    users: Array<userType>
    followingInProgress:Array<Number>

    unfollow:() =>void
    follow:() =>void
    getUsers:(currentPage:number,pageSize:number) =>void
}
class UsersContainer extends React.Component<PropsType> {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber:number) => {       
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress = {this.props.followingInProgress}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}/>

        </>
    }
}

let mapStateToProps = (state:AppStateType) => {
    return {
        users: getUsersMap(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {  setCurrentPage, toggleFollowingProgress, getUsers,follow, unfollow })
  )(UsersContainer)
  