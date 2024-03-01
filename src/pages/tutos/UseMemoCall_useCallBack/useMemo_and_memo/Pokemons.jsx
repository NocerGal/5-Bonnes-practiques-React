import { memo } from 'react';
import PropTypes from 'prop-types';

export const Pokemons = memo(function Pokemons({ pokemons }) {
  console.log('pokemons');
  return (
    <ul className="flex justify-center flex-wrap">
      {pokemons.map((pokemon) => (
        <li className="flex items-center flex-col h-32" key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.nom} />
          {pokemons && <spans>{pokemon.nom}</spans>}
        </li>
      ))}
    </ul>
  );
});

Pokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
