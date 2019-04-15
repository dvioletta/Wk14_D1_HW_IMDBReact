import React, {Component} from "react";
import Comment from "./Comment";

class CommentList extends Component{
  render(){
    const commentNodes = this.props.data.map(comment => {
      return(
        <Comment name={comment.name}key={comment.id}> {comment.url} </Comment>
      )
    })
    return(
      <div className = "movie-list">

      {commentNodes}

      </div>
    )
  }
}

export default CommentList;
