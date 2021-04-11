import React from "react";
import {auth} from '../../firebase/firebase'
import "./user.css";
import { connect } from "react-redux";

const User = ({ user }) => (
  <div className="user-container">
    <div>{user.displayName}</div>
    <img onClick={()=>auth.signOut()} src={user.photoURL} className="user-img" />
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(User);
