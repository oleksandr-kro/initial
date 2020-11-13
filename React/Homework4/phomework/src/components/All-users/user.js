import React from 'react'
import {UserService} from "../../services/UserService";


export default class User extends React.Component{

    _userService = new UserService();
    state= {
    user: null,
        id:'',
        posts:[],
        comments:[]
    };

async    componentDidMount() {
    let id = this.props.match.params.id;
 await   this._userService.getUserWithId(id).then(user=> this.setState({user}) )
    }

    render(){


        return (
            <div>
                {
                    this.state.user &&
                        <div> <p>{this.state.user.id} {this.state.user.name}  {this.state.user.username} {this.state.user.email}</p>
                                <button onClick={()=>this.showPosts(this.state.user.id)}>Show Posts for this User</button>
                                <button onClick={()=>this.showPComments(this.state.user.id)}>Show Comments for this User</button>
                        </div>
                }
                <div className='wrapper'>
                <div>
                    <h2>Posts</h2>
                    {
                        this.state.posts.map(
                            post=>(
                                <div key={post.id}>{post.id}{post.body}</div>
                            )
                        )
                    }
                </div>
                <div>
                    <h2>Commments</h2>
                    {
                        this.state.comments.map(
                            comment=>(
                                <div key={comment.id}>{comment.id}{comment.body}</div>
                            )
                        )
                    }
                </div>
                </div>
            </div>
        )

    }
    showPosts=(id)=> {
        this._userService.getPostWithIdUser(id).then(posts => this.setState({posts}))
    }

    showPComments(id) {
        this._userService.getPostWithIdUser(id).then(comments => this.setState({comments}))
    }
}
