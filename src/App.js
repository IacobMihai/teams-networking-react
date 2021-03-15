
import './App.css';
import  { PersonsTable } from "./PersonsTable"

let persons = [
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
];

function App() {
  return (
    <div>
      <h1>Team Networking</h1> 
      <div>Search</div>
      <PersonsTable teams={teams} />
    </div>
  );
}

export default App;
