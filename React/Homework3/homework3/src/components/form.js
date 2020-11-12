import React, {Component} from 'react';

import './formStyle.css'
import {UserService} from "../services/UserService";
import UserName from "./userName";
import UserId from "./userId";



class Form extends Component {

    _userService = new UserService();
    state = {


    };

    constructor(props) {
        super(props);
        this.xxx = React.createRef();
        this.state={
            users: [],
            inputValue: 'enter name',
            inputValueId:'enter id'

        }
    }

    async componentDidMount(id) {
        let users = await this._userService.getAllUsers();
        this.setState({users})

    }


    render() {


        let filteredUsersName = this.state.users.filter(
            (user) => {
                if (this.state.inputValue) {
                    return user.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1

                }
            }
        )
        let filteredUsersId = this.state.users.filter(
            (user) => {
                if (this.state.inputValueId) {
                    return user.id == this.state.inputValueId

                }
            }
        )


        return (


            <div className={'wrapper'}>
                <div>
                    <input onChange={this.inputChangeTwo} placeholder={this.state.inputValueId}/>
                    {
                        filteredUsersId.map(user=>
                            (<UserId key={user.id} data={user}/>))
                    }
                </div>


                <div>
                    <input onChange={this.inputChange} placeholder={this.state.inputValue}/>

                    {filteredUsersName.map(user =>
                        (<UserName key={user.id} item={user} > </UserName>)
                    )}
                </div>


            </div>
        );
    }



    inputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }


    inputChangeTwo= (e) => {
        this.setState({inputValueId: e.target.value})
    }
}
export default Form;
