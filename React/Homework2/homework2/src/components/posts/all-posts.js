import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import Post from "./post";


class AllPosts extends Component {
    _postService = new PostService()
    state = {
        posts:[]
    }
    async componentDidMount() {
        let posts = await this._postService.getAllPosts();
        this.setState({posts});


    }
    render() {
        return (
            <div>
                <h2>Posts</h2>
                {this.state.posts.map(value => (
                    <Post item={value} key={value.id} ></Post>
                ))}
            </div>
        );
    }
}

export default AllPosts;
