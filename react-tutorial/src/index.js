import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './bulma.min.css';
import './index.css';

class App extends Component{
    render(){
      return(
            <div className="app">
                <Header />
                <Items />
            </div>
        )
    }
}

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"Start"
        }
    }
    render(){
        return(
            <div className="header">
                <h1 id="my-logo" className="title">Picture learner</h1>
                <img src="img/explain-img.png" alt="Exciting learning"/>
                <h2 className="subtitle">Learn through pictures and sounds</h2>
                <button className="button" onClick={()=> this.setState({value:"Resume"})}>{this.state.value}</button>
            </div>
        )
    }
}

class Items extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            increment:()=> this.count++

        }
    }
    render(){
        return(
            <div id="app-5">
                <p className="title">Car</p>
                <img src="img/explain-img.png" alt="items" />
                <br/>
                <button className="button" onClick={()=> this.setState({count:1})}>Next {this.state.count}</button>
                <button className="button" onClick={()=> this.setState({count:0})}>Back {this.state.count}</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));