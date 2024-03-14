import { useState } from 'react'
import './App.css'

function App() {
 
  const[search,setSearch]= useState('');
  const[definition,setDefinition]=useState('');

  const dictionary=
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  const handleClick=(e)=>{
     e.preventDefault();
     const word=dictionary.filter((w)=>search.toLowerCase()==w.word.toLowerCase());
     if(word.length!=0)
     setDefinition(word[0].meaning);
    else
    setDefinition('Word not found in the dictionary.');
  }



  return (
    <>
      <div className="card">
        <h1>Dictionary App</h1>
        <input type='text' name='search' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search for a word'/>
        <button onClick={handleClick}>Search</button>
        <h2>Definition:</h2>
        <p>{definition}</p>
      </div>
    </>
  )
}

export default App
