import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    const characters = [
      {
        name: "Character",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      }
    ]

    const tableHeadings = {
      column1: "Name",
      column2: "Job"
    }


    return (
      <div className="app">
        <Table tableHeadings= { tableHeadings }/>
        <NewTable  characterData={characters}/>
      </div>
    )
  }
}

  
class Table extends React.Component {
    render() {
      const {tableHeadings} = this.props
        return (
            <table>
                <thead>
                  <tr>
                    <th>{ tableHeadings.column1 }</th>
                    <th>{ tableHeadings.column2 }</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>James</td>
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
      const { characterData }= this.props
        return(
            <table>
                <TableHeader />
                <TableBody characterData= {characterData}/>
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

const TableBody = props => {
  const rows = props.characterData.map((row, index)=> {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>   
}

ReactDOM.render(<App />, document.getElementById('root'))
