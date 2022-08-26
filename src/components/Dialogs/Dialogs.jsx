import React from 'react';
import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from "react-router-dom"
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const DialogsForm = (props) => {
     return <form onSubmit={props.handleSubmit}>
          <div>
          <Field component={Textarea} name = {"newMessageBody"} value={props.newMessageBody}
              validate ={[required, maxLengthCreator(10)]} placeholder='Enter your message' />
          </div>
         <div>
         <button>Send</button>
         </div>
     </form>
}
const DialosReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm)

const Dialogs = (props) => {
     let state = props.dialogsPage
     let dialogElements = state.dialog.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
     let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
     let newMessageBody = state.newMessageBody;

     let addNewMessage = (values) => {
          props.SendMessage(values.newMessageBody)
     }

     if (!props.isAuth) return <Navigate to={'/login'} />

     return (
          <div>
               <div className={d.dialogs}>
                    <div className={d.dialogs_item}>
                         {dialogElements}
                    </div>
                    <div className={d.messages}>
                         {messagesElements}
                    </div>
               </div>
               <DialosReduxForm onSubmit={addNewMessage} newMessageBody={newMessageBody} />
          </div>
     )
}
export default Dialogs;
