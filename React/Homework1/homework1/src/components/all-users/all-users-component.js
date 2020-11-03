import React, {Component} from 'react';
import {data} from "../../users/data";
import User from "../user/user";

class AllUsersComponent extends Component {
    render() {
        return (
            <div>
                {
                    data.map( (item , index)=> {
                        {
                            return  ( <User user = {item} key={index}/>)
                        }
                    })
                }
            </div>
        );
    }
}

export default AllUsersComponent;
