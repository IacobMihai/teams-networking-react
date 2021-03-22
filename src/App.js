
import { Component } from 'react';
import './App.css';
import { PersonsTable } from "./PersonsTable"

let persons = [

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        persons: []
      }
    }
    
    componentDidMount() {
      console.warn('mount');
      setTimeout(() => {
        console.warn("loaded");
      
      this.setState({
        persons: [
          {
            "id": "a123",
            "firstName": "Rares",
            "lastName": "Roman",
            "github": "https://github.com/romanrares"
          },
          {
            "id": "b654",
            "firstName": "Nicolae",
            "lastName": "Matei",
            "github": "http://nmatei.github.io/"
          }
        ]
      })
    }, 2000);}
    render() {
      console.debug(this.state.persons);
      return (
        <div>
          <h1>Team Networking</h1>
          <div>Search</div>
          <PersonsTable persons={this.state.persons} border={1} />
        </div>
      );
    }
  }

export default App;
