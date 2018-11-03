import React, { Component } from 'react';
import '../App/App.css';
import Flex from '../Flexi/Flexi';
import Header from '../Flexi/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Flex />
        </header>
      </div>
    );
  }
}

export default App;
