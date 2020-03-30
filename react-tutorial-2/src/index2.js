import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Table />
                <NewTable />
            </div>
        )
    }
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Job</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Charlie</td>
                    <td>Janitor</td>
                  </tr>
                  <tr>
                    <td>Mac</td>
                    <td>Bouncer</td>
                  </tr>
                </tbody>
              </table>
        )
    }
}

class NewTable extends React.Component {
    render(){
        return(
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}
const TableHeader = ()=> {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
    )
}

const TableBody = ()=> {
    return (
        <tbody>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
              </tr>
              <tr>
                <td>Dennis</td>
                <td>Bartender</td>
              </tr>
        </tbody>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))
