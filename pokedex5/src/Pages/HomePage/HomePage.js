import React, { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header/Header";
import { Title } from "../../styleGeral";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import { MainGeral } from "../../styleGeral";
import { GlobalContext } from "../../Components/Global/GlobalContext";
import Alert from "../../Components/Alert/Alert";

export default function HomePage() {
  const { getPokeList, setMyPokes, myPokes, setAlert, setSelect } = useContext(GlobalContext);
  console.log(myPokes);
  return (
    <div>
      <Alert />
      <Header page={'home'} />
      <div>
        <Title>Todos os Pokémons</Title>
      </div>
      <MainGeral>
        {getPokeList &&
          getPokeList.results?.map((item, index) => {
            return (
              <CardPokemon
                setSelect={setSelect}
                setAlert={setAlert}
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
