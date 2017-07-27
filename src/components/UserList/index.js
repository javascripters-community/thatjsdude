import React, { Component } from "react";
import { Table,Jumbotron,Col,Clearfix,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

class TableDataRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={"/user/" + this.props.data.id}>{this.props.data.name}</Link>
                </td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.address.street + ", " + this.props.data.address.suite + 
                    ", " + this.props.data.address.city}</td>
                <td>{this.props.data.company.name}</td>
                <td>
                    <Button bsStyle="link" onClick={this.delete.bind(this)}> 
                        <i className="glyphicon glyphicon-trash action-link" />
                    </Button>
             </td>
            </tr>
        );
    }
    delete(){
        this.props.delete(this.props.data.id);
    }
}

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state={
            userList: []
        };
    }
    render() {
        let table = 
        this.state.userList.map((user ,i)=>{
            return ( <TableDataRow data={user} key={i}
            delete={this.deleteEntry.bind(this)}/> );
        });
        return (
        <Jumbotron >
            <Col md={1} >
                <Link className="pull-left" to="/home">back to home</Link>
            </ Col>
            <Col md={10}>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Office Address</th>
                        <th>Office Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </Table>
            </ Col>
            <Clearfix/>
        </Jumbotron>
        );
    }
    componentDidMount(){
        this.getUseList();
    }
    deleteEntry(id) {
         const newList = this.state.userList.filter((user) => {
            return id !== user.id;
        });
        this.setState({ userList: newList });
    }
    getUseList(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data)=> {
                this.setState({
                    userList:data
                })
            });
    }
}

export default UserList;


