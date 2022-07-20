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
  ImgDetails,
} from "./styled";
import Poison from "../../assets/types/poison.png";
import { useParams } from "react-router-dom";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";
import { types, colors } from "../../constants/types";



export default function DetailsPage() {

  const params = useParams()

  const getPokeDetails = useRequest(`${BaseUrl}pokemon/${params.id}`)
  console.log(getPokeDetails)

  return (
    <>
      {getPokeDetails &&
        <div>
          <Header page={'details'} />
          <div>
            <Title>Detalhes</Title>
          </div>
          <DetalheCard color={colors[getPokeDetails.types[0].type.name]}>
            <ImageFront>
              <ImgDetails src={getPokeDetails.sprites.front_default} />
            </ImageFront>
            <ImageBack>
              <ImgDetails src={getPokeDetails.sprites.back_default} />
            </ImageBack>
            <StatusCard>
              <TitleInfo>Base Stats</TitleInfo>
            </StatusCard>
            <PokeballDiv>
              <PokemonDetail>
                <PokeName>
                  <PokeId>{`#${getPokeDetails.id}`}</PokeId>
                  <PokeLetra>{getPokeDetails.name}</PokeLetra>
                  {getPokeDetails.types?.map((item) => {
                    return (
                      <TypeImg key={item.type.name}
                        src={types[item.type.name]} />
                    )
                  })}
                </PokeName>
                <PokeMoves>
                  <TitleInfo>Moves:</TitleInfo>
                  <DivMoves>
                    {getPokeDetails.moves?.map((item, index) => {
                      return (
                        <Move key={index}>{item.move.name}</Move>
                      )
                    })}

                  </DivMoves>
                </PokeMoves>
              </PokemonDetail>
              <PokePhoto>
                <PokeOut src={getPokeDetails.sprites.other["official-artwork"].front_default}/>
              </PokePhoto>
            </PokeballDiv>
          </DetalheCard>
        </div>}
    </>
  );
}
