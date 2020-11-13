import React, {Component} from 'react';
import {UserService} from "../../services/UserService";


class Users extends Component {
    _userService = new UserService()
    state= {
        users:[]
    }
 async   componentDidMount() {
     let users = await this._userService.getAllUsers();
     this.setState({users});
    }

    render() {
        return (
            <div>
                <button onClick={this.backToHome} >{'<======'}</button>
                {
                    this.state.users.map(user=>(
                        <div key={user.id}>
                            {user.id}  {user.name}  {user.username}
                            <button onClick={()=>this.props.history.push(`/users/${user.id}`)}>Show me this one</button>
                            <hr/>
                        </div>

                    ))
                }
            </div>
        );
    }

    backToHome=()=> {
        this.props.history.push({
            pathname:'/'
        })
    }
}

export default Users;
