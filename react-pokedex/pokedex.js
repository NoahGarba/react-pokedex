import React from 'react';
import pokemons from './pokemons';
import Pokemon from './pokemon'


const Pokedex = (pokemons) =>{
    return (
        <div>
            {pokemons.map(i => (
                <Pokemon name={i.name} img={i.img} tpye={i.type} EXP={i.base_expierence}/>
            ))}
        </div>
    )
}
export default Pokedex