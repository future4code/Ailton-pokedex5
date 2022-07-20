import React, {useState, useEffect, useContext} from 'react';
import Header from '../../Components/Header/Header';
import { Title } from '../../styleGeral';
import CardPokemon from '../../Components/CardPokemon/CardPokemon';
import { MainGeral } from '../../styleGeral';
import { GlobalContext } from '../../Components/Global/GlobalContext';



export default function HomePage() {
//   const [pokemon, setPokemon]= useState([]);
//   const{useRequest}=useContext(GlobalContext);
 
// useEffect(()=>{
// }, [])
// useRequest(setPokemon,"pokemon/?offset=20&limit=20")
//   console.log(pokemon)
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
      </MainGeral>
    </div>
  )
}
