import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Login />
       <p>  </p>
       <Register />
      </div>
    );
  }
}

export default App;
