import React, { Component } from 'react';

class ToyForm extends Component {

  state={ 
    name: "",
    image: "",
    likes: 0
  }

  changeHandler= (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState(this.state)

    fetch('http://localhost:3000/toys', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }


  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.submitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.changeHandler} value={this.state.value}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.changeHandler}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
