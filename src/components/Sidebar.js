import React, { Component } from 'react';

class Sidebar extends Component {

  save() {
    console.log(`this is ${this}`);
  }

  render() {
    return (
      <div className="editor column column-25">
        <button onClick={(e) => this.save(e)} className="button button-clear">+ new note</button>
      </div>
    );
  }
}

export default Sidebar;