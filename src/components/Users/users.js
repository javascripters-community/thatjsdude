import React, { Component } from 'react';
import UserList from '../UserList/userList';
import UserDetails from '../UserDetails/userDetails';
import mockData from '../../data/mockData.json';
class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            selectedUser: []
        }
        this.showUserDetails = this.showUserDetails.bind(this);
    }
    componentDidMount() {
        const first10 = mockData.slice(0, 10);
        this.setState({
            users: first10,
            selectedUser: first10[0]
        });
    }
    showUserDetails(key) {
        const newSelectedUser = this.state.users.find(user => user.id === key);
        this.setState({
            selectedUser: newSelectedUser
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="col-md-12">
                        <h3>User List</h3>
                        <h6 className="mb-2 text-muted">Click on a user to see details.</h6>
                    </div>
                    {this.state.users.map(user => <UserList key={user.id} user={user} showUserDetails={this.showUserDetails}></UserList>)}
                </div>
                <div className="col-md-4">
                    <div className="col-md-12">
                        <h3>User Details</h3>
                    </div>
                    <UserDetails selectedUser={this.state.selectedUser}></UserDetails>
                </div>
            </div>
        );
    }
}

export default Users;
