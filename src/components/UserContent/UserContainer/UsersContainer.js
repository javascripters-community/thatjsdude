import React, { Component } from "react";
import { User } from '../User/User';

/**
  * @ClassName: UsersContainer
  * @Description: This is the class based component contains list of users.
  * 
  **/
export class UsersContainer extends Component {

    constructor(props) {
        super();
    }

    render() {
        const listOfUsers = this.props.userList.map((user, index) => {
            return (
                <User selectedId={this.props.selectedId} onGetUserDetails={this.props.getUserDetails.bind(this)} user={user} key={index}></User>
            )
        });
        return (
            <ul className="user-list pull-left">
                {listOfUsers}
            </ul>
        );
    }
}

UsersContainer.PropTypes = {
    userList: React.PropTypes.array,
    selectedId: React.PropTypes.number,
    getUserDetails: React.PropTypes.func,
}
