import { addPostActionCreator } from '../../redux/mainContentPage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';

let mapStateToProps = (state) =>{
  return {
    postData: state.mainContentPage.postData,
    newPostText: state.mainContentPage.newPostText
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    addPost:  (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
