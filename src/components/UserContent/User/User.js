import React, { Component } from "react";
import { Link } from 'react-router-dom';

/**
  * @ClassName: User
  * @Description: This is the class based component contains single user data.
  * 
  **/
export class User extends Component {

    constructor(props) {
        super();
    }

    /**
      * @FunctionName: onGetUserDetails
      * @Params: user- This is the single user object which is clicked/selected.
      * @Description: This function is used to call the root component's getUserDetails method using props.
      *
      **/
    onGetUserDetails(user) {
         this.props.onGetUserDetails(user);
    }

    render() {
        
        return (
            <li className={(this.props.selectedId == this.props.user.id ? 'active-user' : '') + ' pull-left user-data'} onClick={() => { this.onGetUserDetails(this.props.user) } }>
                <ul className="pull-left">
                    <li><span className="input-field">Name:</span><span>{this.props.user.name}</span></li>
                    <li><span className="input-field">Email:</span><span>{this.props.user.email}</span></li>
                    <li><span className="input-field">City:</span><div><span>{this.props.user.address.city}</span></div></li>
                </ul>
            </li>
        );
    }
}

User.PropTypes = {
    user: React.PropTypes.object,
    selectedId: React.PropTypes.number,
    onGetUserDetails: React.PropTypes.func,
}