/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { pokemonListFiltered } from '../../../../utils';

export default function ListPokemons_useMemo({ filter, pokemons, background }) {
  const pokemonsVisibles = useMemo(() => {
    console.log('fonction conservant les pokemons filtrés');
    return pokemonListFiltered(filter, pokemons);
  }, [filter, pokemons]);

  console.log('rendu du composant listant les pokemons');
  return (
    <div
      className={`flex flex-col gap-2  max-w-screen-xl mx-4 rounded-lg ${
        background ? 'bg-fuchsia-300' : null
      }`}
    >
      <ul className="flex justify-center flex-wrap">
        {pokemonsVisibles.map((pokemon) => (
          <li className="flex items-center flex-col h-32" key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.nom} />
          </li>
        ))}
      </ul>
    </div>
  );
}

ListPokemons_useMemo.propTypes = {
  pokemons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  background: PropTypes.bool.isRequired,
};
