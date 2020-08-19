import "./Dialogs.css";
import {
  updateNewMessageActionCreator,
  sendMessageActionCreator,
} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dataDialog.dialogs,
    messages: state.dialogPage.dataMessage.messages,
    newMessageBody: state.dialogPage.dataMessage.newMessageBody,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (event) => {
      let text = event.target.value;
      dispatch(updateNewMessageActionCreator(text));
    },

    sendMess: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
