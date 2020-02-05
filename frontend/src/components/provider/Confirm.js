import React from "react";
import { closeModal } from "../../actions/modalActions";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/userActions";
import { logout } from "../../actions/sessionActions";
import { withRouter } from "react-router-dom";
import "./confirm.scss";

class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="confirm-box">
        <div className="confirm-top-box">
          <h1>Are you sure?</h1>
          <div className="form-buttons">
            <button
                className="confirm-button"
                onClick={() =>
                this.props
                    .deleteUser(this.props.id)
                    .then(() => this.props.closeModal())
                    .then(() => this.props.logout())
                }
            >
                Yes
            </button>
            <button className="confirm-button" onClick={this.props.closeModal}>
                Cancel
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  id: state.ui.modal.id
});

const mDTP = dispatch => ({
  deleteUser: id => dispatch(deleteUser(id)),
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP, mDTP)(Confirm));
