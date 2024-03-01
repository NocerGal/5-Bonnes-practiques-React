import { pokemonList } from '../../../utils';
import Exemple_useMemo from './useMemo/Exemple_1';
import Exemple_useMemo_memo from './useMemo_and_memo/Exemple_2';

export default function UseMemoAndCallBackPage() {
  const { sachaPokemons } = pokemonList();

  return (
    <div className="flex flex-col gap-4">
      <Exemple_useMemo pokemons={sachaPokemons} />
      <Exemple_useMemo_memo pokemons={sachaPokemons} />
    </div>
  );
}
