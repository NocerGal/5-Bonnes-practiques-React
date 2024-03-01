import { useCallback, useEffect, useState } from 'react';
import AddPokemonForm from './AddPokemonForm';
import PropTypes from 'prop-types';

export default function PokemonsPage({ newPokemon, pokemonsList, background }) {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonList, setPokemonList] = useState(pokemonsList);

  const handleSubmit = useCallback(
    (qtyNewPokemon) => {
      for (let i = 0; i < qtyNewPokemon; i++) {
        setPokemonList((prev) => [
          ...prev,
          {
            id: newPokemon,
            nom: pokemonName,
            catched: {
              isCatched: true,
              pokemonUniqueId: Math.random(),
            },
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newPokemon}.png`,
          },
        ]);
      }
    },
    [newPokemon, pokemonName]
  );

  useEffect(() => {
    const getCurrentPokemoName = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${newPokemon}`
      );
      const datas = await response.json();
      const pokemonName = datas.species.name;
      setPokemonName(pokemonName);
    };
    getCurrentPokemoName();
  }, [newPokemon, pokemonName, pokemonList]);

  return (
    <div
      className={`flex flex-col gap-2  max-w-screen-xl mx-4 py-2 rounded-lg ${
        background ? 'bg-fuchsia-300' : null
      }`}
    >
      <p className="mx-auto">Sacha&apos;s computer</p>
      <span className="mx-auto mb-2">Qty of {pokemonName} to add</span>
      <AddPokemonForm onSubmit={handleSubmit} />
      <ul className="flex justify-center flex-wrap">
        {pokemonList.map((pokemon, _) => (
          <li className="flex items-center flex-col h-32" key={_}>
            <img src={pokemon.image} alt={pokemon.nom} />
          </li>
        ))}
      </ul>
    </div>
  );
}
PokemonsPage.propTypes = {
  newPokemon: PropTypes.number.isRequired,
  background: PropTypes.bool.isRequired,
  pokemonsList: PropTypes.array.isRequired,
};
