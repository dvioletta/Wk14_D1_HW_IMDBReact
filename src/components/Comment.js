import React, {Component} from "react";

class Comment extends Component{
  render(){
    return (
      <div className = "movie-list">
      <h4><a href={this.props.children}>{this.props.name}</a></h4>
      </div>
    )
  }
}

export default Comment
