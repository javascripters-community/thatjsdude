import React, { Component } from 'react';
import './userList.css';
class UserList extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="col-md-12">
                <div className="card user-card">
                    <div className="card-block">
                        <h4 className="card-title" onClick={() => this.props.showUserDetails(user.id)}>
                            {user.first_name} {user.last_name}
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;
