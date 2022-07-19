import React from 'react';
import Header from '../../Components/Header/Header';
import { Title } from '../../styleGeral';
import CardPokemon from '../../Components/CardPokemon/CardPokemon';
import { MainGeral } from '../../styleGeral';



export default function HomePage() {
  return (
    <div>
      <Header/>
      <div>
      <Title>Todos os Pokémons</Title>
      </div>
      <MainGeral>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
        <CardPokemon/>
      </MainGeral>
    </div>
  )
}
