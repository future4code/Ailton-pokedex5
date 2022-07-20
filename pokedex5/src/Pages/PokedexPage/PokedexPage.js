import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { Title } from "../../styleGeral";
import { MainGeral } from "../../styleGeral";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import { ContainerPokedex } from "./styled";
import { GlobalContext } from "../../Components/Global/GlobalContext";

export default function PokedexPage() {
  const { myPokes, setMyPokes } = useContext(GlobalContext);
  console.log(myPokes);
  return (
    <ContainerPokedex>
      <Header page={'pokedex'} />
      <div>
        <Title>Meus Pokémons</Title>
      </div>
      <MainGeral>
        {myPokes &&
          myPokes?.map((item) => {
            return <CardPokemon poke={{name: item}} myPokes={myPokes} setMyPokes={setMyPokes}/>;
          })}
      </MainGeral>
    </ContainerPokedex>
  );
}
