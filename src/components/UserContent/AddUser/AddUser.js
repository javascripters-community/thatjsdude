import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { UserEdit } from '../UserEdit/UserEdit'

/**
  * @ClassName: AddUser
  * @Description: This is the class based component contains selected user data to edit.
  * 
  **/
export class AddUser extends Component {
    
    render() {
        return (
            <UserEdit addUser={true}></UserEdit>
        );
    }
}

