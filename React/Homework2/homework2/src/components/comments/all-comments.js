import React, {Component} from 'react';
import {CommentService} from "../../services/CommentService";
import Comment from "./comment";



class AllComments extends Component {
    _commentService =new CommentService();
    state = {
        comments:[]
    }
async componentDidMount(){
    let comments =    await this._commentService.getAllComments()
    this.setState({comments})
}



    render() {
        return (
            <div>
            <h2>Comments</h2>
                {
                    this.state.comments.map(value => (
                        <Comment item={value} key={value.id} />
                    ) )
                }
            </div>
        );
    }
}

export default AllComments;
