import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// react pass data from parent to child
// Good solutions https://guide.freecodecamp.org/certifications/front-end-libraries/react/pass-state-as-props-to-child-components/
// Good explanation: https://www.freecodecamp.org/forum/t/react-pass-state-as-props-to-child-components/202933/4 
// react pass data back from child to parent

// create the data value that you want to keep track of in state
// i.e. count: 0
// create a callback function in the parent component

class App extends React.Component {
  
  constructor(props){
        super(props);
        this.state={
            message: "",
            count:0
        }
    }
  countKeeper = (childCount) => {
    this.setState({count: childCount})
  }
    callbackFunction = (childData) => {
      this.setState({message: childData})
    };
    render() {
        return (
            <div>
                 <Navbar
                 parentCallback = {this.callbackFunction}
                 countKeeper = {this.countKeeper}
                 count= {this.state.count}
                 />
                 <p> {this.state.message} </p>
                 <p> {this.state.count}</p>
            </div>
        );
    }
};

class Navbar extends React.Component {
  sendData = () => {
         this.props.parentCallback("Hey Popsie, How’s it going?");
    };
    sendCount = ()=> {
        this.props.countKeeper(10);
    }
render() {
    return(
        <div className="header">
            <h1 id="my-logo" className="title">Picture learner</h1>
            <button className="button" onClick={(e)=> this.sendData(e)}>Button</button>
            <button className="button" onClick={()=> this.sendCount()}>Button</button>
                 <p> {this.props.count}</p>

        </div>
                    )
//you can call function sendData whenever you'd like to send data from child component to Parent component.
    }
};

ReactDOM.render(<App />, document.getElementById('root'))

