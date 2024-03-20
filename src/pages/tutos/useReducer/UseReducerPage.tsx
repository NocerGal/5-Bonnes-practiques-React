import React from 'react';
import Exemple_Use_Reducer from './Exemple_useReducer';
import { pokemonList } from '../../../utils';

export default function UseReducerPage() {
  const { sachaPokemons } = pokemonList();
  return <Exemple_Use_Reducer pokemons={sachaPokemons} />;
}
