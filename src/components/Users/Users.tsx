import { userType } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css"

type PropsType = {
    totalUsersCount: number 
    pageSize:number
    currentPage:number
    onPageChanged :() =>void
    users:Array<userType>
    followingInProgress:Array<Number>
    unfollow:() =>void
    follow:() =>void
}

let Users: React.FC<PropsType> = ({onPageChanged,totalUsersCount,pageSize,currentPage, users, ...props}) => {
    
    return(
    <div>
        <Paginator
         totalItemsCount = {totalUsersCount} 
         pageSize = {pageSize} 
         currentPage = {currentPage}
          onPageChanged={onPageChanged}/>
          <div className={styles.mainUsers}>
        {
            users.map(u => <User user ={u}
            followingInProgress = {props.followingInProgress}
            key = {u.id}
            unfollow = {props.unfollow}
            follow = {props.follow}
            />
            )
        }
        </div>
    </div>
    )
}
export default Users