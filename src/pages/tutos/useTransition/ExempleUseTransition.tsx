import React, { useState, useTransition, useEffect } from 'react';
import CatchedPokemons from './CatchedPokemons';
import PostsTab from './UncatchedPokemons';

export default function PokemonListUseTransition({ pokemons }) {
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState('catched');

  function selectFilter(nextFilter) {
    startTransition(() => {
      setFilter(nextFilter);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-28 ">
      <h2>useTransition</h2>

      <div className="flex flex-col gap-2">
        <h3 className="mx-auto">Exemple useTransition</h3>
        <div className="flex gap-4 mx-auto px-2">
          <button
            onClick={(e) => selectFilter(e.currentTarget.value)}
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              filter === 'all' ? 'bg-fuchsia-400' : null
            }`}
            value="all"
          >
            Tous
          </button>
          <button
            onClick={(e) => selectFilter(e.currentTarget.value)}
            className={`px-3 py-2 bg-fuchsia-300 text-fuchsia-900 rounded-md hover:bg-fuchsia-200 transition-all ${
              filter === 'catched' ? 'bg-fuchsia-400' : null
            }`}
            value="catched"
          >
            Attrapé(s)
          </button>
        </div>
        {isPending ? <span className="text-center">Loading...</span> : null}
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap justify-center gap-4 px-4 mx-auto">
            {filter === 'catched' && (
              <CatchedPokemons pokemons={pokemons} filter={filter} />
            )}
            {filter === 'all' && <PostsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
