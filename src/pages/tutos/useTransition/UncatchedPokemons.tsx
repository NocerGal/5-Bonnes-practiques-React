import React, { memo } from 'react';

const PostsTab = memo(function PostsTab() {
  const items: React.ReactNode[] = [];

  for (let i = 1; i <= 500; i++) {
    items.push(
      <SlowPokemon
        key={i}
        index={i}
        pokemonImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`}
      />
    );
  }

  return (
    <ul className="flex flex-wrap justify-center gap-4 px-4 mx-auto">
      {items}
    </ul>
  );
});

function SlowPokemon({ index, pokemonImage }) {
  let startTime = performance.now();

  while (performance.now() - startTime < 2) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li>
      <img src={pokemonImage} className="h-20 w-20" />
      <span>Pokemon {index}</span>
    </li>
  );
}

export default PostsTab;
