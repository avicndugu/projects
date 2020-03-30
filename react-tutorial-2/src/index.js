import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
    render(){
        const allItems = [
            {
              "name":"phone",
              "url":"img/phone.png",
              "audio":"phone.mp3"
            },
            {
              "name":"moon",
              "url":"img/moon.png",
              "audio":"moon.mp3"
            },
            {
              "name":"shoes",
              "url":"img/shoes.png",
              "audio":"shoes.mp3"
            },
            {
              "name":"socks",
              "url":"img/socks.png",
              "audio":"socks.mp3"
            },
            {
              "name":"star",
              "url":"img/star.png",
              "audio":"star.mp3"
            },
            {
              "name":"sun",
              "url":"img/sun.png",
              "audio":"sun.mp3"
            },
            {
              "name":"bottle",
              "url":"img/bottle.png",
              "audio":"bottle.mp3"
            },
            {
              "name":"door",
              "url":"img/door.png",
              "audio":"door.mp3"
            },
            {
              "name":"car",
              "url":"img/car.png",
              "audio":"car.mp3"
            },
            {
              "name":"cup",
              "url":"img/cup.png",
              "audio":"cup.mp3"
            }
        ]
        return(
            <div className="app">
                <Header />
                <Items allItems= {allItems} />
            </div>
        )
    }
}

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            value:"Start",
            count:0,
            display:true,
        }
    }
    render(){
        if(this.state.display===true){
            return(
                <div className="header">
                    <h1 id="my-logo" className="title">Picture learner</h1>
                    <img src="img/explain-img.png" alt="Exciting learning"/>
                    <h2 className="subtitle">Learn through pictures and sounds</h2>
                    <button className="button" onClick={()=> this.setState({value:"Resume"})}>{this.state.value}</button>
                    <button className="button" onClick={()=> this.setState({count:1})}>{this.state.count}</button>
                    <button className="button" onClick={()=> this.setState({display:false})}>{this.state.value}</button>
                </div>
            )
        } else {
            return(
                <div className="header">
                    <p>Common House Items</p>
                </div>
            )
        }
    }   
}

class Items extends Component {
    constructor(props){
        super(props);
            this.state={
                count:0,
        };
    }
    increment(){
        if(this.state.count<9){
            this.setState({
                count: this.state.count + 1
            })
        }
    }
    decrement(){
        if(this.state.count>0){
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    render(){
    const { allItems } = this.props


    const rows = this.props.allItems.map((row, index)=> {
        return (
            <tr key={index}>
                <td>{index}</td>
                <td>{row.name}</td>
                <td>{row.url}</td>
                <td>{row.audio}</td>
            </tr>
        )
    })
        return(
            <div id="app-5">
                <p>Count {allItems[this.state.count].name}</p>
                <p>Count {allItems[this.state.count].url}</p>
                <p>Count {allItems[this.state.count].audio}</p>
                <br/>
                <button className="button" onClick={(e)=> this.decrement(e)}>Previous</button>
                <button className="button" onClick={(e)=> this.increment(e)}>Next</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image Link</th>
                            <th>Audio Link</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));