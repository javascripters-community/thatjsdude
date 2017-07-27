import React, { Component } from 'react';

class UserDetails extends Component {
    render() {
        const selectedUser = this.props.selectedUser;
        return (
            <div className="col-md-8">
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">{selectedUser.first_name} {selectedUser.last_name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{selectedUser.email}</h6>
                        <p className="card-text">Gender: {selectedUser.gender}</p>
                        <p className="card-text">IP: {selectedUser.ip_address}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetails;
