import React, { Component } from "react";
import { Link } from 'react-router-dom';
/**
  * @ClassName: UserEdit
  * @Description: This is the class based component contains selected user data to edit.
  * 
  **/
export class AddUser extends Component {


    constructor(props) {
        super();
        this.state = {
            name: '',
            email: '',
            city: ''
        }
    }

    /**
      * @FunctionName: onNameChange
      * @Params: e - event object.
      * @Description: This function is triggered on name change.
      *
      **/
    onNameChange(e) {
        // alert();
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    /**
      * @FunctionName: onAddressChange
      * @Params: e - event object.
      * @Description: This function is triggered on address change.
      *
      **/
    onAddressChange(e) {
        this.setState({
            city: e.target.value
        })

    }

    /**
      * @FunctionName: onEmailChange
      * @Params: e - event object.
      * @Description: This function is triggered on email change.
      *
      **/
    onEmailChange(e) {
        this.setState({
            email: e.target.value
        })

    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="userName">Name:</label>
                    <input type="text" className="form-control" id="userName" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" onChange={this.onEmailChange.bind(this)} id="email" value={this.state.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">City:</label>
                    <input type="text" className="form-control" onChange={this.onAddressChange.bind(this)} id="address" value={this.state.city} />
                </div>
                <Link type="submit" className="btn btn-default" to={{ pathname: '/usersList', query: [this.state.id, this.state.name, this.state.email, this.state.city] }}>Add</Link>
                <Link to={{ pathname: '/usersList' }} className="btn btn-default">Cancel</Link>
            </form>
        );
    }
}

//  <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input type="email" className="form-control" onChange={this.onEmailChange.bind(this)} id="email" value={this.state.email} />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="address">City:</label>
//                     <input type="text" className="form-control" onChange={this.onAddressChange.bind(this)} id="address" value={this.state.city} />
//                 </div>
//                 <Link type="submit" className="btn btn-default" to={{ pathname: '/usersList', query: [this.state.id, this.state.name, this.state.email, this.state.city] }}>Submit</Link>
//                 <Link to={{ pathname: '/usersList' }} className="btn btn-default">Cancel</Link>