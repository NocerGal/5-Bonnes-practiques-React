import PropTypes from 'prop-types';
import { useState } from 'react';
import PokemonsPage from './PokemonsPage';
export default function Exemple_useCallBack({ pokemons }) {
  const [isBackgroundDisplayed, setIsBackgroundDisplayed] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h2 className="mt-8">Sacha computer</h2>
      <div className="flex flex-col items-center gap-2">
        <span>
          Computer is used to stock pokemons - More than one pokemon of each
          species can be stored
        </span>
        <span>Enter you new catched pokemon</span>
        <label className="text-fuchsia-900 text-lg mx-auto mb-2">
          Afficher Background :
          <input
            onChange={() => setIsBackgroundDisplayed((prev) => !prev)}
            type="checkbox"
            className="ml-2 rounded-lg focus:border px-2 py-1"
          />
        </label>
      </div>

      <PokemonsPage
        pokemonsList={pokemons}
        background={isBackgroundDisplayed}
        newPokemon={1}
      />
    </div>
  );
}

Exemple_useCallBack.propTypes = {
  pokemons: PropTypes.array.isRequired,
};
