import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {
  constructor() {
    super();
  }
  change = () => {
    console.log(`Changed!`);
  }

  render() {
    return (
      <div className="App container">
        <h1>MD Editor</h1>
        <div className="row">  
          <Sidebar />
          <Editor change={this.change}/>
        </div>
      </div>
    );
  }
}

export default App;
