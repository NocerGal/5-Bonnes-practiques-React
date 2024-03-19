import { useState } from 'react';
import { pokemonList } from '../../../utils';
import Exemple_useCallBack from './callBack/Exemple_useCallBack';
import Exemple_useMemo from './useMemo/Exemple_1';
import Exemple_useMemo_memo from './useMemo_and_memo/Exemple_2';

export default function UseMemoAndCallBackPage() {
  const [isDisplayedExemple1, setDisplayedExemple1] = useState(false);
  const [isDisplayedExemple2, setDisplayedExemple2] = useState(false);
  const [isDisplayedExemple3, setDisplayedExemple3] = useState(false);

  const { sachaPokemons } = pokemonList();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-fuchsia-900 text-lg mx-auto mb-2">
          Afficher exemple useMemo
          <input
            className="ml-2"
            type="checkbox"
            onChange={() => setDisplayedExemple1((prev) => !prev)}
            checked={isDisplayedExemple1}
          />
        </label>
        <label className="text-fuchsia-900 text-lg mx-auto mb-2">
          Afficher exemple useMemo et memo
          <input
            className="ml-2"
            type="checkbox"
            onChange={() => setDisplayedExemple2((prev) => !prev)}
            checked={isDisplayedExemple2}
          />
        </label>

        <label className="text-fuchsia-900 text-lg mx-auto mb-2">
          Afficher exemple useCallback
          <input
            className="ml-2"
            type="checkbox"
            onChange={() => setDisplayedExemple3((prev) => !prev)}
            checked={isDisplayedExemple3}
          />
        </label>
      </div>
      {isDisplayedExemple1 && <Exemple_useMemo pokemons={sachaPokemons} />}
      {isDisplayedExemple2 && <Exemple_useMemo_memo pokemons={sachaPokemons} />}
      {isDisplayedExemple3 && <Exemple_useCallBack pokemons={sachaPokemons} />}
    </div>
  );
}
