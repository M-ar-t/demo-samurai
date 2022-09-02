import { reduxForm } from "redux-form"
import { createField, Input, Textarea} from "../../common/FormsControls/FormsControls"
import s from "./ProfileInfo.module.css"
import styles from "../../common/FormsControls/FormsControls.module.css"

const CreateDescription = (props) =>{
  return <div className={s.formDiv}>
        <span>
        {props.description}
        </span>
        <span>
        {createField(props.placeholder,props.name,props.validators,
          props.component, props.props, props.text)}
        </span>
         </div>
}

const ContactDataForm = ({ handleSubmit,error, profile }) => {
  
  return <form onSubmit={handleSubmit}>
     {error &&
            <div className={styles.commonError}>
                <span> {error}</span>
            </div>}
   <CreateDescription description = "Looking for a job"
   placeholder = {null} name = "lookingForAJob" component ={Input} props = {{type:"checkbox"}} />
   
   <CreateDescription description = "Looking for a job description"
   placeholder = "Enter description" name = "lookingForAJobDescription" component ={Input} props = {{type:"input"}} />
  
   <CreateDescription description = "Full name"
   placeholder = "Enter your full name" name = "fullName" component ={Input} props = {{type:"input"}} />
   
   <CreateDescription description = "About me"
   placeholder = "Enter information about yourself" name = "aboutMe" component ={Textarea} props = {{type:"input"}} />
        <div><b>Contacts:
      {Object.keys(profile.contacts)
    .map(key => {return <div>
      <b>{key}: {createField(key,"contacts." + key,[],Input)}</b>
    </div>})}
    </b>
    </div>
      <div>
          <button className={s.buttonSave}>Save</button>
          </div>
  </form>
}

// const ContactDataFReduxFormContainer = connect(null,{onButtonClickCancel})(ContactDataFReduxForm)
const ContactDataReduxForm = reduxForm({ form: 'contactData', enableReinitialize: true, destroyOnUnmount: false }) (ContactDataForm)
export default ContactDataReduxForm