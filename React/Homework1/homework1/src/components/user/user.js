import React, {Component} from 'react';

class User extends Component {
    render() {
        let {user} = this.props

        return (
            <div>
                {user.name}- {user.age} -{user.status.toString()}
            </div>
        );
    }
}

export default User;
