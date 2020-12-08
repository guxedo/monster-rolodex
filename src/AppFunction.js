import React, { useState, useEffect } from "react";
import './App.css';

export const App = () => {
  const [monsters, setMonsters] = useState();

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters=>setMonsters(monsters))
  }, []);

  return (
    <div className="App">
    {
      this.state.monsters.map(
        monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        )
      )
    }
  </div>
  );
}
export default App;