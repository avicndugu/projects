import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            display:true,
            value:"Start",
            count:0
        }
    }
    toggle (){
        if(this.state.value==="Start"){
            this.setState({
                value:"Home",
                display:false
            })
        }else{
            this.setState({
                value:"Start",
                display:true
            })
        }

    }

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

        if(this.state.display===true){
            return(
                <div className="app">
                    <Header headerDisplay={this.state.display}/>
                    <button className="button" onClick={(e)=> this.toggle(e)}>{this.state.value}</button>
                </div>
            )
        }else{
            return(
                <div className="app">
                    <Items 
                        allItems= {allItems}
                        itemsDisplay = {this.state.display}
                        counter={this.counter}
                        increment={this.increment}
                        count={this.state.count}
                        decrement={this.decrement}
                     />
                    <button className="button" onClick={(e)=> this.toggle(e)}>{this.state.value}</button>
                </div>
            )
        }

    }
}

class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1 id="my-logo" className="title">Picture learner</h1>
                <img src={`${process.env.PUBLIC_URL}/img/explain-img.png`} alt="Exciting learning"/>
                <h2 className="subtitle">Learn through pictures and sounds</h2>
            </div>
        )
    }   
}

class Items extends Component {
    constructor(props){
        super(props);
            this.state={
                count:0,
        };
    }
    
    increment = (itemCount)=> {
        this.setState({
            count: itemCount
        })
    }
    decrement= (itemCount) => {
        this.setState({
            count: itemCount
        })
    }

    render(){
        const { allItems } = this.props        
        return(
            <div id="app-5">
                {console.log(this.state.count)}
                <h2>{allItems[this.state.count].name}</h2>
                <img src={`${process.env.PUBLIC_URL}${allItems[this.state.count].url}`}  alt="Decorative text"/>
                <p>{allItems[this.state.count].audio}</p>
                <CycleButtons 
                counter={this.counter}
                increment={this.increment}
                count={this.state.count}
                decrement={this.decrement}
                />
                <br />
            </div>
        )
    }
}

class CycleButtons extends Component {
    countData= ()=> {
        this.props.counter(5);
    }
    incrementer = (current)=> {
        if(this.props.count<9){
            this.props.increment(current + 1)
        }
    }
    decrementer =(current)=> {
        if(this.props.count>0){
            this.props.increment(current - 1)
        }
    }
    render(){
        return(
            <div>
                <button className="button" onClick={()=> this.decrementer(this.props.count)}>Previous</button>
                <button className="button" onClick={()=> this.incrementer(this.props.count)}>Next</button>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));