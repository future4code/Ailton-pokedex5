import React, { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header/Header";
import { Title } from "../../styleGeral";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import { MainGeral } from "../../styleGeral";
import { GlobalContext } from "../../Components/Global/GlobalContext";

export default function HomePage() {
  const { getPokeList, setMyPokes, myPokes } = useContext(GlobalContext);
  console.log(myPokes);
  return (
    <div>
      <Header />
      <div>
        <Title>Todos os Pokémons</Title>
      </div>
      <MainGeral>
        {getPokeList &&
          getPokeList.results?.map((item, index) => {
            return (
              <CardPokemon
                key={index + 1}
                poke={item}
                setMyPokes={setMyPokes}
                myPokes={myPokes}
              />
            );
          })}
      </MainGeral>
    </div>
  );
}
