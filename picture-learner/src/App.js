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
      visibility:true,
      listVisibility:true,
      cameraVisibility:true,
      itemNumber:1,
      publishVisibility:true,
    }
    this.listNameView=this.listNameView.bind(this);
    this.cameraView=this.cameraView.bind(this);
    this.addItem = this.addItem.bind(this);

  }
  listNameView(){
        this.setState({
          listVisibility:false,
        });
    }
  cameraView(){
        this.setState({
            cameraVisibility:false,
        })
  }

  addItem(){
        if (this.state.itemNumber<10) {
            this.setState({
                itemNumber:this.state.itemNumber + 1
            })
        }
  }


  render(){
    const {listVisibility, cameraVisibility, itemNumber, publishVisibility}=this.state;
    if(listVisibility===true){
      return(
        <div className="container">
          <h1>New list</h1>
          <ListName listVisibility={listVisibility} listNameView={this.listNameView}/>
          <p>Step 1 of 3</p>
        </div>
      )
    }else if(cameraVisibility===true){
      return(
        <div className="container"> 
          <Camera cameraVisibility={cameraVisibility} cameraView={this.cameraView} itemNumber={itemNumber} addItem={this.addItem}/>
          <p>Step 2 of 3</p>
        </div>
      )
    }
    else if(publishVisibility===true){
      return(
        <div>
          <p>Uploading picture</p>
          <p>Upload completed</p>
          <button>Add more items</button>
          <button>Publish class.</button>
          <p>Step 3 of 3</p>
        </div>
      )
    }
  }
}


export default App;
