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
    render(){
        return(
            <div className="header">
                <h1 id="my-logo" className="title">Picture learner</h1>
                <img src="img/explain-img.png" alt="Exciting learning"/>
                <h2 className="subtitle">Learn through pictures and sounds</h2>
                <button className="button">Start</button>
            </div>
        )
    }
}

class Items extends Component{
    render(){
        return(
            <div id="app-5">
                <p className="title">Car</p>
                <img src="img/explain-img.png" alt="items" />
                <br/>
                <button className="button">Next</button>
                <button className="button">Back</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));