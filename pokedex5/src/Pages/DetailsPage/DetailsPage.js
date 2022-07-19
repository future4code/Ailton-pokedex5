import React from 'react'
import Header from '../../Components/Header/Header'
import { Title } from '../../styleGeral'
import { TypeImg, PokeballDiv, PokeId, PokeLetra, PokeName, PokeMoves, PokemonDetail, DetalheCard, ImageFront, ImageBack, StatusCard } from './styled'
import  Poison  from '../../assets/types/poison.png'

export default function DetailsPage() {
  return (
    <div>
      <Header/>
      <div>
      <Title>Detalhes</Title>
      </div>
      <DetalheCard>
       <ImageFront>1</ImageFront>
       <ImageBack>2</ImageBack>
       <StatusCard>
        <p>Base Stats:</p>
        </StatusCard>
       <PokeballDiv>
       <PokemonDetail>
        <PokeName>
          <PokeId>#01</PokeId>
          <PokeLetra>Bulbasaur</PokeLetra>
          <TypeImg src={Poison}/> <TypeImg src={Poison}/>
          </PokeName>
        <PokeMoves>
          <p>Moves:</p>
        </PokeMoves>
       </PokemonDetail>
       <div>5</div>
       </PokeballDiv>
      </DetalheCard>
      </div>
  )
}
