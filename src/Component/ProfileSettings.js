import React from "react";
import PropTypes from "prop-types";
import CreatePostModal from "./CreatePostModal";
import ChangeUsernameModal from "./ChangeUsernameModal";
import ChangePasswordModal from "./ChangePasswordModal";
import DeleteAccountModal from "./DeleteAccountModal";

export default class ProfileSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            user_id: "",
            usernameModal: false,
            changePasswordModal: false,
            deleteAccountModal: false
        };
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };


    render() {
        return (
            <div className="profile-page-container">

                <div className="profile-page-uploads">
                    <button className="profile-page-setting-button" onClick={e => toggleUsername(this, e)}>Change Username</button>
                    <button className="profile-page-setting-button" onClick={e => togglePassword(this, e)}>Change password</button>
                    <button className="profile-page-setting-button" onClick={e => toggleDeleteAccount(this, e)}>Delete Account</button>

                </div>
                <ChangeUsernameModal show={this.state.usernameModal} onClose={e => toggleUsername(this, e)} />
                <ChangePasswordModal show={this.state.changePasswordModal} onClose={e => togglePassword(this, e)} />
                <DeleteAccountModal show={this.state.deleteAccountModal} onClose={e => toggleDeleteAccount(this, e)} />
            </div>

        );
    }
}



 function toggleUsername(app) {
     app.setState({
         usernameModal: !app.state.usernameModal
     });
 }

 function togglePassword(app) {


     app.setState({
         changePasswordModal: !app.state.changePasswordModal
     });
 }

 function toggleDeleteAccount(app) {
     app.setState({
         deleteAccountModal: !app.state.deleteAccountModal
     });
 }