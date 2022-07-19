import React from "react";
import Header from "../../Components/Header/Header";
import { Title } from "../../styleGeral";
import {
  TypeImg,
  PokeballDiv,
  PokeId,
  PokeLetra,
  PokeName,
  PokeMoves,
  PokemonDetail,
  DetalheCard,
  ImageFront,
  ImageBack,
  StatusCard,
  TitleInfo,
  PokePhoto,
  PokeOut,
  DivMoves,
  Move,
} from "./styled";
import Poison from "../../assets/types/poison.png";

export default function DetailsPage() {
  return (
    <div>
      <Header />
      <div>
        <Title>Detalhes</Title>
      </div>
      <DetalheCard>
        <ImageFront>1</ImageFront>
        <ImageBack>2</ImageBack>
        <StatusCard>
          <TitleInfo>Base Stats</TitleInfo>
        </StatusCard>
        <PokeballDiv>
          <PokemonDetail>
            <PokeName>
              <PokeId>#01</PokeId>
              <PokeLetra>Bulbasaur</PokeLetra>
              <TypeImg src={Poison} /> <TypeImg src={Poison} />
            </PokeName>
            <PokeMoves>
              <TitleInfo>Moves:</TitleInfo>
              <DivMoves>
                <Move>Razor Wind</Move>
                <Move>Sword Dance</Move>
                <Move>Cut</Move>
                <Move>Vine Whip</Move>
              </DivMoves>
            </PokeMoves>
          </PokemonDetail>
          <PokePhoto>
            <PokeOut src={"https://cdn.discordapp.com/attachments/984825626898882573/999038912553046047/unknown.png"}/>
          </PokePhoto>
        </PokeballDiv>
      </DetalheCard>
    </div>
  );
}
