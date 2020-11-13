import React, {Component} from 'react';
import {PostService} from "../../services/PostService";

class Posts extends Component {
    _postService = new PostService()
    state= {
        posts:[]
    }
    async   componentDidMount() {
        let posts = await this._postService.getAllPosts();
        this.setState({posts});
    }

    render() {
        return (
            <div>
                <button onClick={this.backToHome} > {'<======'} </button>
                {
                    this.state.posts.map(post=>(
                        <div key={post.id}>

                            {post.id}  {post.title}

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

export default Posts;
