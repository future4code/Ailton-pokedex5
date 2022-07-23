import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { ContainerTitle, DivErro, Title } from "../../styleGeral";
import { MainGeral } from "../../styleGeral";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import { ButtonBattle, ContainerPokedex } from "./styled";
import { GlobalContext } from "../../Components/Global/GlobalContext";
import Alert from "../../Components/Alert/Alert";
import { goToBattlePage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export default function PokedexPage() {
  const { myPokes, setMyPokes, setAlert, setSelect, setLoading, loading } =
    useContext(GlobalContext);
    const navigate = useNavigate();
  return (
    <ContainerPokedex>
      <Alert />
      <Header page={"pokedex"} />
      <ContainerTitle>
        <Title>Meus Pokémons</Title>
        <ButtonBattle onClick={()=> goToBattlePage(navigate)}/>
      </ContainerTitle>
      {loading && <DivErro />}
      {!loading && myPokes && (
        <MainGeral>
          {myPokes?.map((item) => {
            return (
              <CardPokemon
              key={item}
                setAlert={setAlert}
                setSelect={setSelect}
                poke={{ name: item }}
                myPokes={myPokes}
                setMyPokes={setMyPokes}
                setLoading={setLoading}
              />
            );
          })}
        </MainGeral>
      )}
    </ContainerPokedex>
  );
}
