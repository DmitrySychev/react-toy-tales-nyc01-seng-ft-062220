import React, { Component } from 'react';

class ToyCard extends Component {

state = {
  likes: this.props.toy.likes
  }

likeHandler=()=>{
  this.setState({ likes: this.props.toy.likes++})
}



  render() {
    let id = this.props.toy.id
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.likeHandler}>Like {'<3'}</button>
        <button className="del-btn" onClick={()=> {id !== undefined ? this.props.deleteHandler(id) : console.log('haha')} }>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
