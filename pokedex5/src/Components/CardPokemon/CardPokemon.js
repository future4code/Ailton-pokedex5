import React from 'react';
import { ContainerCardPokemon, ContainerNomeTipo, ContainerFotoBotão,
   ContainerTypes, TypeImg, IdPokemon,PokemonName,
   DetalhesTitle, ButtonCapturar, ImagemPoke,
   ContainerImgPoke, MainHome  } from './styled';
import poison from "../../assets/types/poison.png";

export default function CardPokemon() {
  return (
    <ContainerCardPokemon>
      <ContainerNomeTipo>
        <div>
        <IdPokemon>#01</IdPokemon>
        <PokemonName >Bulbasaur</PokemonName>
        <ContainerTypes>
          <TypeImg src={poison} />
          <TypeImg src={poison} />
        </ContainerTypes>
        </div>
        <div>
        <DetalhesTitle>Detalhes</DetalhesTitle>
        </div>
      </ContainerNomeTipo>
      <ContainerFotoBotão>
        <ContainerImgPoke>
        <ImagemPoke src={"https://cdn.discordapp.com/attachments/984825626898882573/999038912553046047/unknown.png"}/>
        </ContainerImgPoke>
        <ButtonCapturar>Capturar!</ButtonCapturar>
        </ContainerFotoBotão>
    </ContainerCardPokemon>
  )
}
