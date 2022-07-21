import React, { useContext } from "react";
import Logo from "../../assets/Logo.png";
import Vetor from "../../assets/vetor.png";
import {
  VetorImg,
  Voltar,
  ButtonHeader,
  DivHeader,
  HeaderContainer,
  ImgHeader,
  ButtonExcluir,
  ButtonCapturar,
} from "./styled";
import { Title } from "../../styleGeral";
import { useNavigate, useParams } from "react-router-dom";
import {
  goToDetailsPage,
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";
import { GlobalContext } from "../Global/GlobalContext";

export default function Header({ page }) {
  const navigate = useNavigate();
  const { setMyPokes, myPokes, setAlert, setSelect } = useContext(GlobalContext);
  const Params = useParams();

  const liberar = (poke) => {
    const newArray = myPokes.filter((item) => {
      if (item !== poke) {
        return item;
      }
    });
    setMyPokes(newArray);
    setAlert(true)
    setSelect('remove')
  };
  return (
    <HeaderContainer>
      <DivHeader>
        {page !== "home" && (
          <Voltar onClick={() => goToHomePage(navigate)}>
            <VetorImg src={Vetor} />
            Todos os Pokémons
          </Voltar>
        )}
      </DivHeader>
      <DivHeader>
        <ImgHeader src={Logo} />
      </DivHeader>
      <DivHeader>
        {page === "home" && (
          <ButtonHeader onClick={() => goToPokedex(navigate)}>
            Pokedéx
          </ButtonHeader>
        )}
        {page === "details" && (myPokes.includes(Params.id.toLowerCase()) || (
          <ButtonCapturar onClick={() => {
            setMyPokes([...myPokes, Params.id.toLowerCase()])
            setAlert(true)
            setSelect('catch')
          }}>Capturar Pokémon!</ButtonCapturar>
        ))}
        {page === "details" && (myPokes.includes(Params.id.toLowerCase()) && (
          <ButtonExcluir onClick={() => liberar(Params.id.toLowerCase())}>Liberar Pokémon</ButtonExcluir>
        ))}
      </DivHeader>
    </HeaderContainer>
  );
}
