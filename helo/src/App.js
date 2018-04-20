import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';

import routes from './routes';

class App extends Component {
  render() {
   var render = window.location.href === 'http://localhost:3000/#/' ? <div>
      {routes}
    </div> : <div>
      <Nav />
      {routes}
    </div>
    return (
      <div className="App">
      {render}
      </div>
    );
  }
}

export default App;
