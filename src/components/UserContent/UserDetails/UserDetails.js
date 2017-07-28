import React, { Component } from "react";
import { User } from '../User/User';

/**
  * @ClassName: UserDetails
  * @Description: This is the class based component contains selected user details.
  * 
  **/
export class UserDetails extends Component {

    constructor(props) {
        super();
    }

    render() {
        if (Object.keys(this.props.singleUser).length > 0) {
            return (
                <ul className="user-detail">
                    <li><span className="input-field">Name:</span><span>{this.props.singleUser.name}</span></li>
                    <li><span className="input-field">Email:</span><span>{this.props.singleUser.email}</span></li>
                    <li><span className="input-field">City:</span><span>{this.props.singleUser.address.city}</span></li>
                </ul>
            )
        }

        return (
            <div className="no-user-selected">
                No User Selected. Please select any user from left menu by clicking on it.
            </div>
        );
    }
}

UserDetails.PropTypes = {
    singleUser: React.PropTypes.object
}