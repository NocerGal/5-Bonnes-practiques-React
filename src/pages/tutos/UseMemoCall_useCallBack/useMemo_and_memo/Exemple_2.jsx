import { useState } from 'react';
import ListPokemons_memo_useMemo from './ListPokemons_memo_useMemo';
import PropTypes from 'prop-types';

export default function Exemple_useMemo_memo({ pokemons }) {
  const [pokemonFilterExemple2, setPokemonFilteredExemple2] = useState('all');

  const [isBackGroundExemple2, setIsBackGroundExemple2] = useState(false);

  const handleButtonClickExemple2 = (e) => {
    setPokemonFilteredExemple2(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-28 ">
      <h2>UseMemo et memo</h2>
      <div className="flex flex-col gap-2">
        <h3 className="mx-auto">Exemple useMemo</h3>
        <label className="text-fuchsia-900 text-lg mx-auto mb-2">
          Fond de couleur{' '}
          <input
            type="checkbox"
            onChange={() => setIsBackGroundExemple2((prev) => !prev)}
            checked={isBackGroundExemple2}
          />
        </label>
        <div className="flex gap-4 mx-auto px-2">
          <button
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              pokemonFilterExemple2 === 'all' ? 'bg-fuchsia-200' : null
            }`}
            value="all"
            onClick={handleButtonClickExemple2}
          >
            Tous
          </button>
          <button
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              pokemonFilterExemple2 === 'catched' ? 'bg-fuchsia-200' : null
            }`}
            value="catched"
            onClick={handleButtonClickExemple2}
          >
            Attrapé(s)
          </button>
          <button
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              pokemonFilterExemple2 === 'uncatched' ? 'bg-fuchsia-200' : null
            }`}
            value="uncatched"
            onClick={handleButtonClickExemple2}
          >
            Non attrapé(s)
          </button>
        </div>

        <ListPokemons_memo_useMemo
          background={isBackGroundExemple2}
          pokemons={pokemons}
          filter={pokemonFilterExemple2}
        />
      </div>
    </div>
  );
}

Exemple_useMemo_memo.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
