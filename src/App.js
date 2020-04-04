import React from 'react';
import './App.css';
import Collapsible from "./components/collapsible";
import data from "./components/collapsible/data.json"

function App() {
  return ( <div className="container"> 
  <h1>Collapsible List</h1>
  <ul className="collapse" >
    {data.map(data=> {
      return <Collapsible data = {data} key={data.id}/>
    })}
  
  </ul>
  
  </div>
  );
}

export default App;
