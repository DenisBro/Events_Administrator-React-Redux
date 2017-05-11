import React, { Component } from 'react';
import Events from './componets/Events';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="create-events">
          <input type="text" placeholder="Name of event"/>
          <input type="text" placeholder="Partisipation fee"/>
          <input type="number" placeholder="Max number of participants"/>
          <button>Create</button>
        </div>
        <Events />

      </div>
    );
  }
}

export default App;
