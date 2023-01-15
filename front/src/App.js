import './styles/App.css';
import axios from "axios";
import TableView from "./components/tableView/TableView";
import {useEffect, useState} from "react";
import Header from "./components/Header";

function App() {
    const [pilots, setPilots] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/pilots")
            .then(response => {
                setPilots(response.data)
            })
    }, [pilots])

  return (
    <div className="App">
      <main role="main">
          <Header title="Birdnest Project"/>
         {<TableView pilots={pilots}/>}
      </main>
    </div>
  );
}

export default App;
