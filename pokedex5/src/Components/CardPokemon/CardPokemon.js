import React, { useEffect, useState } from "react";
import {
  ContainerCardPokemon,
  ContainerNomeTipo,
  ContainerFotoBotão,
  ContainerTypes,
  TypeImg,
  IdPokemon,
  PokemonName,
  DetalhesTitle,
  ButtonCapturar,
  ImagemPoke,
  ContainerImgPoke,
  MainHome,
  ButtonLiberar,
} from "./styled";
import { types, colors } from "../../constants/types";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/Coordinator";

export default function CardPokemon({
  poke,
  setMyPokes,
  myPokes,
  setAlert,
  setSelect,
}) {
  const navigate = useNavigate();
  const [newPic, setNewPic] = useState("");
  const getPoke = useRequest(`${BaseUrl}pokemon/${poke.name}`);

  const liberar = (poke) => {
    const newArray = myPokes.filter((item) => {
      if (item !== poke) {
        return item;
      }
    });
    setMyPokes(newArray);
    setAlert(true);
    setSelect("remove");
  };
  useEffect(() => {
    if (getPoke?.sprites.other["official-artwork"].front_default === null) {
      const arrayUrl = getPoke.species.url.split("/");
      setNewPic(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          arrayUrl[arrayUrl.length - 2]
        }.png`
      );
    }
  }, [getPoke]);
  return (
    <>
      {getPoke && (
        <ContainerCardPokemon color={colors[getPoke.types[0].type.name]}>
          <ContainerNomeTipo>
            <div>
              <IdPokemon>{`#${getPoke.id}`}</IdPokemon>
              <PokemonName>
                {getPoke.name.includes("-")
                  ? getPoke.species.name
                  : getPoke.name}
              </PokemonName>
              <ContainerTypes>
                {getPoke.types?.map((item) => {
                  return (
                    <TypeImg key={item.type.name} src={types[item.type.name]} />
                  );
                })}
              </ContainerTypes>
            </div>
            <div>
              <DetalhesTitle
                onClick={() => goToDetailsPage(navigate, getPoke.name)}
              >
                Detalhes
              </DetalhesTitle>
            </div>
          </ContainerNomeTipo>
          <ContainerFotoBotão>
            <ContainerImgPoke>
              <ImagemPoke
                src={
                  getPoke.sprites.other["official-artwork"].front_default ===
                  null
                    ? newPic
                    : getPoke.sprites.other["official-artwork"].front_default
                }
              />
            </ContainerImgPoke>
            {myPokes.includes(getPoke.name) || (
              <ButtonCapturar
                onClick={() => {
                  setMyPokes([...myPokes, getPoke.name]);
                  setAlert(true);
                  setSelect("catch");
                }}
              >
                Capturar!
              </ButtonCapturar>
            )}
            {myPokes.includes(getPoke.name) && (
              <ButtonLiberar onClick={() => liberar(getPoke.name)}>
                Liberar!
              </ButtonLiberar>
            )}
          </ContainerFotoBotão>
        </ContainerCardPokemon>
      )}
    </>
  );
}
