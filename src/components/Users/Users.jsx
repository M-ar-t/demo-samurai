import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css"

let Users = ({onPageChanged,totalUsersCount,pageSize,currentPage, users, ...props}) => {
    
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