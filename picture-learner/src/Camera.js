import React from 'react';

class Camera extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            itemNumber:1,
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem(){
        if (this.state.itemNumber<10) {
            this.setState({
                itemNumber:this.state.itemNumber + 1
            })
        }
    }

    render(){
        return(
            <div>        
                <h1>{this.state.itemNumber}. Name of item</h1>
                <h1>Camera</h1>
                <h1>[Icon]Take a picture</h1>
                <button>Retake</button>
                <button onClick={this.addItem}>Accept</button>
            </div>
        )
      }
}


export default Camera;
