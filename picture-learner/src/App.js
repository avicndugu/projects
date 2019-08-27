import React from 'react';
import Camera from './Camera';
import ListName from './ListName';

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <h1>New list</h1>
        <ListName />
        <input type="text" placeholder="name of the item" />
        <button>Add name</button>
        <Camera />
        <p>Uploading picture</p>
        <p>Upload completed</p>
        <button>Add more items</button>
        <button>Publish class.</button>
      </div>
    )
  }
}


export default App;
