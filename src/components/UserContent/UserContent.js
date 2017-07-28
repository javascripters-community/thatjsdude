import React, { Component } from 'react';
import HomeContent from '../HomeContent/HomeContent';
import axios from 'axios';
import { UserDetails } from './UserDetails/UserDetails';
import { UsersContainer } from './UserContainer/UsersContainer';
import AppHeader from '../AppHeader/AppHeader';


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
            }).catch(error => {
                console.log(error);
            });
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
    render() {
        if(this.props.location.query!= undefined){
          return <div className="success-msg">User updated successfully !!</div>
         }
        return (
            <div>
                <div className="col-md-7">
                    <UsersContainer selectedId={this.state.selectedId} userList={this.state.userList} getUserDetails={this.getUserDetails.bind(this)}></UsersContainer>
                </div>
                <div className="col-md-5">
                    <UserDetails singleUser={this.state.singleUser}></UserDetails>
                </div>
            </div>
        );
    }
}

export default UserContent;