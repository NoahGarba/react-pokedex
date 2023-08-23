import React from 'react';
import pokemons from './pokemons';
import Pokedex from './pokedex';




function App() {
    return(
        <div>
            <Pokedex pokemon={pokemons}/>
        </div>
    )
}

export default App