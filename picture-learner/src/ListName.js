import React from 'react';

class listName extends React.Component{
  render(){
    return(
        <div>
          <h1>Name of the list</h1>
          <input type="text" placeholder="Name of class"/>
          <button>Add new list</button>
        </div>
    )
  }
}


export default listName;
