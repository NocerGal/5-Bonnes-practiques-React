import { useState } from 'react';
import ListPokemons_useMemo from './ListPokemons_useMemo';
import PropTypes from 'prop-types';

export default function Exemple_useMemo({ pokemons }) {
  const [pokemonFilterExemple, setPokemonFilteredExemple] = useState('all');
  const [isBackGroundExemple, setIsBackGroundExemple] = useState(false);

  const handleButtonClickExemple = (e) => {
    setPokemonFilteredExemple(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-28 ">
      <h2>UseMemo</h2>
      <div className="flex flex-col gap-2">
        <h3 className="mx-auto">Exemple useMemo</h3>
        <label className="text-fuchsia-900 text-lg mx-auto mb-2">
          Fond de couleur{' '}
          <input
            type="checkbox"
            onChange={() => setIsBackGroundExemple((prev) => !prev)}
            checked={isBackGroundExemple}
          />
        </label>
        <div className="flex gap-4 mx-auto px-2">
          <button
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              pokemonFilterExemple === 'all' ? 'bg-fuchsia-200' : null
            }`}
            value="all"
            onClick={handleButtonClickExemple}
          >
            Tous
          </button>
          <button
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              pokemonFilterExemple === 'catched' ? 'bg-fuchsia-200' : null
            }`}
            value="catched"
            onClick={handleButtonClickExemple}
          >
            Attrapé(s)
          </button>
          <button
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              pokemonFilterExemple === 'uncatched' ? 'bg-fuchsia-200' : null
            }`}
            value="uncatched"
            onClick={handleButtonClickExemple}
          >
            Non attrapé(s)
          </button>
        </div>

        <ListPokemons_useMemo
          background={isBackGroundExemple}
          pokemons={pokemons}
          filter={pokemonFilterExemple}
        />
      </div>
    </div>
  );
}

Exemple_useMemo.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
