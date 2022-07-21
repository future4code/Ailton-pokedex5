import React, { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header/Header";
import { Title } from "../../styleGeral";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import { MainGeral } from "../../styleGeral";
import { GlobalContext } from "../../Components/Global/GlobalContext";
import { DivNav } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import {
  goErrorPage,
  goToHomePage,
  goToHomePageId,
} from "../../routes/Coordinator";

export default function HomePage() {
  const params = useParams();
  const navigate = useNavigate();
  const {
    getPokeList,
    setMyPokes,
    myPokes,
    setPagination,
    pagination,
    totalPages,
  } = useContext(GlobalContext);

  useEffect(() => {
    console.log(Number(params.page), totalPages);
    if (Number(params.page) < totalPages) {
      setPagination(Number(params.page) - 1);
    }
    if (Number(params.page) > totalPages) {
      goErrorPage(navigate);
    }
    if (pagination === 0 && params.page === "1") {
      goToHomePage(navigate);
    }
    if (pagination > 0) {
      goToHomePageId(navigate, pagination + 1);
    }
  }, [totalPages]);

  useEffect(() => {
    if (pagination === 0 && !params) {
      goToHomePage(navigate);
    }
    if (pagination > 0) {
      goToHomePageId(navigate, pagination + 1);
    }
  }, [pagination]);

  return (
    <div>
      <Header page={"home"} />
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
      <DivNav>
        {pagination - 2 >= 0 && (
          <p onClick={() => setPagination(pagination - 2)}>{pagination - 1}</p>
        )}
        {pagination - 1 >= 0 && (
          <p onClick={() => setPagination(pagination - 1)}>{pagination}</p>
        )}
        <p>{pagination + 1}</p>
        {pagination + 1 <= totalPages && (
          <p onClick={() => setPagination(pagination + 1)}>{pagination + 2}</p>
        )}
        {pagination + 2 <= totalPages && (
          <p onClick={() => setPagination(pagination + 2)}>{pagination + 3}</p>
        )}
        <p></p>
      </DivNav>
    </div>
  );
}
