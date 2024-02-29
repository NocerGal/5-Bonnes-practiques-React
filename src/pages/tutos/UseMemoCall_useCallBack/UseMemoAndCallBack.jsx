import { useState } from 'react';
import { pokemonList } from '../../../utils';
import ListPokemons from './ListPokemon';

export default function UseMemoAndCallBackPage() {
  const [pokemonFilter, setPokemonFiltered] = useState('all');
  const [displayPokemonName, setDisplayPokemonName] = useState(true);

  const { sachaPokemons } = pokemonList();

  const handleButtonClick = (e) => {
    setPokemonFiltered(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-28 ">
      <h2>UseMemo et callBack</h2>
      <div className="flex flex-col gap-2">
        <h3 className="mx-auto">Exemple useMemo</h3>
        <label className="text-fuchsia-900 text-lg mx-auto mb-2">
          Nom des pokémons{' '}
          <input
            type="checkbox"
            onClick={() => setDisplayPokemonName((prev) => !prev)}
          />
        </label>
        <div className="flex gap-4 mx-auto px-2">
          <button
            className="px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all"
            value="all"
            onClick={handleButtonClick}
          >
            All
          </button>
          <button
            className="px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all"
            value="catched"
            onClick={handleButtonClick}
          >
            Attrapé(s)
          </button>
          <button
            className="px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all"
            value="uncatched"
            onClick={handleButtonClick}
          >
            Non attrapé(s)
          </button>
        </div>
        <div>
          <ListPokemons
            pokemons={sachaPokemons}
            filter={pokemonFilter}
            isDisplayName={displayPokemonName}
          />
        </div>
      </div>
    </div>
  );
}
