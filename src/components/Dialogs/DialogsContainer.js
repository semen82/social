import './Dialogs.css';
import { updateNewMessage, sendMessage } from '../../Redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dataDialog.dialogs,
    messages: state.dialogPage.dataMessage.messages,
    newMessageBody: state.dialogPage.dataMessage.newMessageBody,
  };
};

export default compose(
  connect(mapStateToProps, { updateNewMessage, sendMessage }),
  withAuthRedirect
)(Dialogs);
