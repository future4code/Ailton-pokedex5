import React, { useContext, useEffect } from "react";
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
  ContainerStates,
  StatsName,
  StatsValue,
  ContainerDetails,
  ContainerTotal
} from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";
import { types, colors } from "../../constants/types";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import { Stats } from "../../constants/types";
import Alert from "../../Components/Alert/Alert";
import { GlobalContext } from "../../Components/Global/GlobalContext";
import { goErrorPage, goToHomePage } from "../../routes/Coordinator";

export default function DetailsPage() {
  const params = useParams()
  const navigate = useNavigate()
  const getPokeDetails = useRequest(`${BaseUrl}pokemon/${params.id}`)

const {getPokeList} = useContext(GlobalContext)

// useEffect (() => {
//   getPokeList && (!getPokeList.includes(params.id) && goToHomePage(navigate))
// }, []) 
  return (
    <>

      {getPokeDetails &&
        <ContainerDetails>
          <Alert />
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
              {getPokeDetails.stats?.map((item, index) => {
                return (
                  <ContainerStates key={index}>
                    <StatsName>{Stats[index]}</StatsName>
                    <StatsValue>{item.base_stat}</StatsValue>
                    <ProgressBar item={item} />
                  </ContainerStates>
                )
              })}
              <ContainerTotal>
                <StatsName>
                  Total
                </StatsName>
                <StatsValue>
                {getPokeDetails.stats.reduce((total, item)=>{ return total + item.base_stat }, 0)}
                </StatsValue>
              </ContainerTotal>
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
                <PokeOut src={getPokeDetails.sprites.other["official-artwork"].front_default} />
              </PokePhoto>
            </PokeballDiv>
          </DetalheCard>
        </ContainerDetails>}
    </>
  );
}
