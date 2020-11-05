import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "./user";
import SingleUser from "./singleUser";

class AllUsers extends Component {
    _userService = new UserService();
    state =
        {
        users:[],
        user:[]
    };

 async componentDidMount() {
  let users = await this._userService.getAllUsers();
        this.setState({users});


}
getOneUser =(id)=> {
    this._userService.getUserById(id).then(value =>  this.setState({user:value}))
}

    render() {
        let {user} = this.state
        return (
            <div>
                <h2>Users</h2>
                {this.state.users.map(value =>
                    (
                    <User item={value} key={value.id} getOneUserById={this.getOneUser}></User>
                    )

                )}

                <hr/>
                {
                    user&& (<SingleUser item={this.state.user}></SingleUser>)
                }






            </div>
        );
    }
}

export default AllUsers;
