import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response =>{setPokemon(response.data.results)})
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
