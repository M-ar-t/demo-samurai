import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css'
import Post from './Post/Post';
// import { addPostActionCreator } from '../../redux/mainContentPage-reducer';
// import { updateNewPostTextActionCreator } from '../../redux/mainContentPage-reducer';

const MyPostsForm = (props) =>{
  return <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name ="newPostText"
          placeholder='Post message' validate = {[required, maxLengthCreator(10)]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
  </form>
}

const MyPostsReduxForm = reduxForm({ form: 'myPosts' })(MyPostsForm)

const MyPosts =  React.memo (props => {
  let Postelements = props.postData.map(p => <Post img={p.img} message={p.message} count={p.likesCount} key ={p.id}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
        <MyPostsReduxForm onSubmit= {onAddPost}/>
      <div className={s.posts}>
        {Postelements}
      </div>
    </div>
  )
})
export default MyPosts;
