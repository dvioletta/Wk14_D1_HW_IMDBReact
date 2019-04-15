import React, {Component} from "react";
import CommentList from '../components/CommentList'

class CommentBox extends Component{
constructor(props){
  super(props);
  this.state = {
    data:[
      {
        id: 1,
        name: "Avengers: Endgame",
        url: "https://www.imdb.com/title/tt4154796/?ref_=rlm"
      },
      {
        id: 2,
        name: "Tolkien",
        url: "https://www.imdb.com/title/tt3361792/?ref_=rlm"
      },
      {
        id: 3,
        name: "A Dog's Journey",
        url: "https://www.imdb.com/title/tt8385474/?ref_=rlm"
      },
      {
        id: 4,
        name: "Pokémon Detective Pikachu",
        url: "https://www.imdb.com/title/tt5884052/?ref_=rlm"
      },
      {
        id: 5,
        name: "Aladdin",
        url: "https://www.imdb.com/title/tt6139732/?ref_=rlm"
      },
      {
        id: 6,
        name:"Hellboy",
        url: "https://www.imdb.com/title/tt2274648/?ref_=rlm"
      }
    ]
  }
}


  render(){
    return(
      <div className="movie stuff">
      <h2>Movie Listing for UK</h2>
      <CommentList data={this.state.data}/>
      <p className = "Films for UK for rest of the year"><a href={"https://www.imdb.com/calendar/?region=gb"}>Film releases for the rest of the year UK>></a></p>
      </div>
    )
  }
}

export default CommentBox;
