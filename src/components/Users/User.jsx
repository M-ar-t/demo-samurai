import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png"
import styles from "./users.module.css"

let User = ({user, followingInProgress, follow,unfollow,...props}) => {
 
    return(
    <div>
                <span>
                    <div>
                        <NavLink to={'/maincontent/' + user.id}>
                            <img alt='' src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id ===user.id)} onClick={() => {
                                unfollow(user.id)  
                            }}>Unfollow</button> 
                            :<button disabled={followingInProgress.some(id => id ===user.id)} onClick={() => {
                                follow(user.id)  
                            }} >Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.sity"}</div>
                    </span>

                </span>
            </div>)
}
export default User