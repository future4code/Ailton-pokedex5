import React from "react";
import {
  ContainerCardBattle,
  ContainerInfo,
  ContainerTypes,
  ContainerStats,
  ContainerTotal,
  ContainerTotalInfo,
  PokeImg,
  Stat
} from "./styled";
import { types, Stats, colors } from "../../constants/types";
import { PokemonName, TypeImg } from "../CardPokemon/styled";
import {ProgressBar} from "../ProgressBar/ProgressBar";
import { PokeId, StatsName, StatsValue } from "../../Pages/DetailsPage/styled";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";

export const CardBattle = ({selectPokemon, setLoading}) => {
    const pokemon = useRequest(`${BaseUrl}pokemon/${selectPokemon}`, setLoading);


  return (
    <>
      { pokemon && 
    <ContainerCardBattle color={colors[pokemon.types[0].type.name]}>
        <PokeImg src={pokemon.sprites.other['official-artwork'].front_default}/>
      <ContainerInfo>
        <PokeId>#{pokemon.id}</PokeId>
        <PokemonName>{pokemon.name}</PokemonName>
        <ContainerTypes>
          {pokemon.types?.map((item)=>{
            return(
                <TypeImg key={item.type.name}  src={types[item.type.name]}/>
            )
          })}
        </ContainerTypes>
      </ContainerInfo>
      <ContainerStats>
        {pokemon.stats.map((item, index)=>{
            return(
                <Stat key={item.stat.name}>
                <StatsName><strong>{Stats[index]}</strong></StatsName>
                <StatsValue>{item.base_stat}</StatsValue>
                <ProgressBar item={item}/>
                </Stat>
            )
        })}
      </ContainerStats>
      <ContainerTotal>
        <p>
        {`Valor Total: ${pokemon.stats.reduce((total, item) => {
                  return total + item.base_stat;
                }, 0)}`}
                </p>
      </ContainerTotal>
      
    </ContainerCardBattle>
    }
    </>
    
  );
};
