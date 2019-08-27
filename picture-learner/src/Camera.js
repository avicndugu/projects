import React from 'react';

class Camera extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            itemNumber:1,
        }
    }
    render(){
        return(
            <div>        
                <h1>{this.state.itemNumber}. Name of item</h1>
                <h1>Camera</h1>
                <h1>[Icon]Take a picture</h1>
                <button>Retake</button>
                <button>Accept</button>
            </div>
        )
      }
}


export default Camera;
