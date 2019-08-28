import React from 'react';

class ListName extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         visibility:true,
    //     }
    //   }
  render(){
    const {listNameView}= this.props;
    // if (listNameVisibility===true){
      return(
          <div>
            <h1>Name of the list</h1>
            <input type="text" placeholder="Name of class"/>
            <button onClick={this.props.listNameView}>Add new list</button>
          </div>
      )
    // }else{

    // }
  }
}


export default ListName;
