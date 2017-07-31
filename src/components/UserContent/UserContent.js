import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeContent from '../HomeContent/HomeContent';
import axios from 'axios';
import { UserDetails } from './UserDetails/UserDetails';
import { UsersContainer } from './UserContainer/UsersContainer';
import AppHeader from '../AppHeader/AppHeader';
import _ from 'lodash';

/**
  * @ClassName: Home
  * @Description: This is the root component of the application
  * 
  **/

class UserContent extends Component {

    constructor(props) {
        super();
        this.state = {
            singleUser: {},
            userList: [],
            selectedId: null
        };
    }


    /**
      * @FunctionName: componentDidMount
      * @Description: This is the component life cycle hook method.When the component gets rendered, then it fetches 
      * the list of users from the fake rest API and store it in the state's property.
      * 
      **/
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const userList = res.data;
                console.log(res)
                this.setState({ userList });
                this.compareData();
            }).catch(error => {
                console.log(error);
            });
    }


    /**
      * @FunctionName: compareData
      * @Description: This function is used to check is there any data available in query property of location object. And based
      * on this call either the update or add function. If 'id' exists then call update function else call add new function.
      *
      **/
    compareData() {
        let dublipcateData = this.state.userList;
        if (this.props.location.query[0] != undefined) {
            this.updateExistingUser(dublipcateData)
        }
        else {
            this.addNewUser(dublipcateData);
        }
    }


    /**
      * @FunctionName: addNewUser
      * @Params: dublipcateData- This is the duplicate of userList.
      * @Description: This function is used to add the new user in the userList.
      * "selectedId".
      *
      **/
    addNewUser(dublipcateData) {
        let obj = {};
        let getNewId = dublipcateData.length;
        obj.id = getNewId;
        obj.name = this.props.location.query[1];
        obj.email = this.props.location.query[2];
        obj.address = { city: this.props.location.query[3] };
        dublipcateData.push(obj);
        return this.setState({ userList: dublipcateData })
    }


    /**
      * @FunctionName: updateExistingUser
      * @Params: dublipcateData- This is the duplicate of userList.
      * @Description:  This function is used to update the user in the userList.
      *
      **/
    updateExistingUser(dublipcateData) {
        let data = dublipcateData.map((el, i) => {
            if (el.id == this.props.location.query[0]) {
                el.name = this.props.location.query[1];
                el.email = this.props.location.query[2];
                el.address.city = this.props.location.query[3];
            }
            return this.setState({ userList: dublipcateData })
        }).bind(this)
    }


    /**
      * @FunctionName: getUserDetails
      * @Params: user- This is the single user object which is clicked/selected.
      * @Description: This function is used to set the selected user's object in the state 'singleUser' and corresponding id in state
      * "selectedId".
      *
      **/
    getUserDetails(user) {
        this.setState({
            singleUser: user,
            selectedId: user.id
        })
    }


    /**
      * @FunctionName: removeUser
      * @Params: user- This is the single user object which is to remove.
      * @Description: This function is used to remove selected user.
      *
      **/
    removeUser(user) {
        let dublipcateData = this.state.userList;
        let data = dublipcateData.map((el, i) => {
            if (el.id == user.id) {
                dublipcateData.splice(i, 1);
                return this.setState({ userList: dublipcateData })
            }
        })
    }

    render() {
        return (
            <div>
                <div className="col-md-5">
                    <div className="user-list-header">
                        <Link to="/addUser"><p>+ Add New User</p></Link>
                    </div>
                    <UsersContainer selectedId={this.state.selectedId} userList={this.state.userList} getUserDetails={this.getUserDetails.bind(this)}></UsersContainer>
                </div>
                <div className="col-md-7">
                    <UserDetails singleUser={this.state.singleUser} removeUser={this.removeUser.bind(this)}></UserDetails>
                </div>
            </div>
        );
    }
}

export default UserContent;