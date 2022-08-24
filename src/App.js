import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }
}

handleInput = async (e) =>{
  e.preventDefault();
  this.setState({
    city: e.target.value
  })
}

// function App() {
render() {  
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>
    // </div>

    <form onSubmit={this.getCityData}>
      <label>Pick a City! 
        <input type="text" placeholder='City Name' onInput={this.handleInput} />
      </label>
      <button type="submit">Explore!</button>
    </form>
  );
};

export default App;
