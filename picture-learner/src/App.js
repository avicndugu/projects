import React from 'react';
import Camera from './Camera';
import ListName from './ListName';

class ItemNames extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      itemName:"Get name from input value",
      // inputItemName: document.querySelector("div[item-name]").value,
    }
    // this.addItemName=this.addItemName.bind(this);
  }
  // addItemName(){
    // this.setState({
      // itemName:this.state.inputItemName,
    // })
  // }
  render(){
    return(
      <div item-name>
        <input type="text" placeholder="name of the item" />
        <button>Add name</button>
        <p>{this.itemName}</p>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visibility:"view3",
    }
  }
  render(){
    if(this.state.visibility=="view1"){
      return(
        <div className="container">
          <h1>New list</h1>
          <ListName />
        </div>
      )
    }else if(this.state.visibility=="view2"){
      return(
        <div className="container"> 
          <Camera />
        </div>
      )
    }
    else if(this.state.visibility=="view3"){
      return(
        <div>
          <p>Uploading picture</p>
          <p>Upload completed</p>
          <button>Add more items</button>
          <button>Publish class.</button>
        </div>
      )
    }
  }
}


export default App;
