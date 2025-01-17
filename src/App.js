import React from 'react';
import './components/index.css';
import Collapsible from "./components/index";
import data from "./components/data.json"

function App() {
  return (
    <div className="container">
      <h1>Collapsible List</h1>
      <ul className="collapse" >
        {data.map(data => {
          return <Collapsible data={data} key={data.id} />
        })}
      </ul>
    </div>
  );
}

export default App;
