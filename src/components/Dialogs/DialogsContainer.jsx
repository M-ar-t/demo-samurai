import { sendMessageCreator } from '../redux/dialogsPage-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import {compose} from "redux"

let mapStateToProps = (state) =>{
     return {
          dialogsPage: state.dialogsPage,
     }
}
let mapDispatchToProps =(dispatch) =>{
return {
     SendMessage: (newMessageBody) => {
         dispatch(sendMessageCreator(newMessageBody))
     }
     }
}

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withAuthRedirect
   )(Dialogs)
