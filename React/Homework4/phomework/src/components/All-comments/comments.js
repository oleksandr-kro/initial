import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import {CommentService} from "../../services/CommentService";

class Comments extends Component {
    _commentService = new CommentService()
    state= {
        comments:[]
    }
    async   componentDidMount() {
        let comments = await this._commentService.getAllComments();
        this.setState({comments});
    }
    render() {
        return (
            <div>
                <button onClick={this.backToHome} > {'<======'} </button>
                {
                    this.state.comments.map(comment=>(
                        <div key={comment.id}>

                            {comment.id}  {comment.body}

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

export default Comments;
