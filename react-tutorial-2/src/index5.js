import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// react pass state from parent to child
// Good solutions https://guide.freecodecamp.org/certifications/front-end-libraries/react/pass-state-as-props-to-child-components/
// Good explanation: https://www.freecodecamp.org/forum/t/react-pass-state-as-props-to-child-components/202933/4 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div className="app">
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'))

