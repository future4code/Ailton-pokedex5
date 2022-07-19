import React from 'react';
import Header from '../../Components/Header/Header';
import { Title } from '../../styleGeral';
import { MainGeral } from "../../styleGeral";
import CardPokemon from '../../Components/CardPokemon/CardPokemon';
import { ContainerPokedex } from './styled';

export default function PokedexPage() {
  return (
    <ContainerPokedex>
      <Header/>
      <div>
        <Title>Meus Pokémons</Title>
      </div>
      <MainGeral>
       <CardPokemon/>
       <CardPokemon/>
       <CardPokemon/>
       <CardPokemon/>
       <CardPokemon/>
      </MainGeral>
      </ContainerPokedex>
  )
}
