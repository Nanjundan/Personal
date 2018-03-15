import React, {Component} from 'react';
import Header from './Header.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
             <div id="app">
                <Header />
             </div>
        );
  }
}

export default App;
