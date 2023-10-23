import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  })

  return (
    <>
      {
        pokemon.map((pokemon, index) => 
          <div>
            <p key={index}>{pokemon.name}</p>
          </div>
        )
      }
    </>
  )
}

export default App
