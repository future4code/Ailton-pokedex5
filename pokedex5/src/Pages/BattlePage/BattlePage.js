import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { MainBattle } from './styled';
import { CardBattle } from '../../Components/CardBattle/CardBattle';
import { GlobalContext } from '../../Components/Global/GlobalContext';
import { useRequest } from '../../services/hooks/useRequest';
import { useParams } from 'react-router-dom';
import { BaseUrl } from '../../constants/baseUrl';
import { DivErro } from '../../styleGeral';


export default function BattlePage() {
const {myPokes, loading, setLoading}= useContext(GlobalContext);
const[pokemon, setPokemon]= useState("");
const [selectPokemon, setSelectPokemon]= useState("");
const onChangePokemon = (event)=>{
  setSelectPokemon(event.target.value)
};

const pokemons =useRequest( `${BaseUrl}pokemon/${selectPokemon}`,setLoading);
useEffect(()=>{
  if(selectPokemon !== ""){
    setPokemon(pokemons);
  }
}, [pokemon])


  return (
    <div>
        <Header/>
        <MainBattle>
          <div>
          <select onChange={onChangePokemon} >
          <option value={""}>Selecione um pokemon</option>
          {myPokes.map((item)=>{
            return(
              <option key={item} value={item}>{item}</option>
            )
          })}
          </select>
          </div>
          {loading && <DivErro />}
          {!loading && pokemon && (
            <CardBattle pokemon={pokemon} />
          )
          }
        </MainBattle>

    </div>
  )
}
