import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ForLoop from './components/for-loop';
import Todo from './containers/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForLoop></ForLoop>
        <Todo />
      </div>
    );
  }
}

export default App;
