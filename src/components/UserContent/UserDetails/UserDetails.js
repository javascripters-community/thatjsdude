import React, { Component } from "react";
import { User } from '../User/User';
import { Link } from 'react-router-dom';
/**
  * @ClassName: UserDetails
  * @Description: This is the class based component contains selected user details.
  * 
  **/
export class UserDetails extends Component {

    constructor(props) {
        super();
    }
    removeUser() {
        return this.props.removeUser(this.props.singleUser);
    }

    render() {
        if (Object.keys(this.props.singleUser).length > 0) {
            return (
                <div className="user-detail">
                    <ul>
                        <li><span className="input-field">Name:</span><span>{this.props.singleUser.name}</span></li>
                        <li><span className="input-field">Email:</span><span>{this.props.singleUser.email}</span></li>
                        <li><span className="input-field">City:</span><span>{this.props.singleUser.address.city}</span></li>
                    </ul>
                    <Link className="edit pull-right btn btn-primary" to={{ pathname: '/userEdit/:' + this.props.singleUser.id, params: this.props.singleUser.id, query: this.props.singleUser}}>Edit</Link>

                    <button className="pull-right btn btn-primary" onClick={this.removeUser.bind(this)}>Remove</button>
                </div>
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