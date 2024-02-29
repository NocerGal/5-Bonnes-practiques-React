import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { pokemonListFiltered } from '../../../utils';

export default function ListPokemons({ filter, pokemons, isDisplayName }) {
  const pokemonsVisible = useMemo(() => {
    return pokemonListFiltered(filter, pokemons);
  }, [filter, pokemons]);

  return (
    <ul className="flex justify-center flex-wrap">
      {pokemonsVisible.map((pokemon) => (
        <li className="flex items-center flex-col h-32" key={pokemon.id}>
          <img src={pokemon.image} />
          {isDisplayName && <spans>{pokemon.nom}</spans>}
        </li>
      ))}
    </ul>
  );
}

ListPokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  isDisplayName: PropTypes.bool.isRequired,
};
