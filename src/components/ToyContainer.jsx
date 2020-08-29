import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

  
  state ={
    data: []
  }
  componentDidMount() {
    fetch('http://localhost:3000/toys')
      .then(res => res.json())
      .then(data => this.setState({data: data}))
  }


  render() {
    let toy = this.state.data.map(toyObj => <ToyCard toy={toyObj}/>)
    return(
      <div id="toy-collection">
        {toy}
      </div>
    );
  }
}

export default ToyContainer;
