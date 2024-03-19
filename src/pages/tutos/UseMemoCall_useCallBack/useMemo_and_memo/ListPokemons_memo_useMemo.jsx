import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { pokemonListFiltered } from '../../../../utils';
import { Pokemons } from './Pokemons';

export default function ListPokemons_memo_useMemo({
  filter,
  pokemons,
  background,
}) {
  const pokemonsVisible = useMemo(() => {
    console.log('usememo');
    return pokemonListFiltered(filter, pokemons);
  }, [filter, pokemons]);

  console.log('ListPokemon composant');

  return (
    <div
      className={`flex flex-col gap-2  max-w-screen-xl mx-4 rounded-lg ${
        background ? 'bg-fuchsia-300' : null
      }`}
    >
      <Pokemons pokemons={pokemonsVisible} />
    </div>
  );
}

ListPokemons_memo_useMemo.propTypes = {
  pokemons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  background: PropTypes.bool.isRequired,
};
