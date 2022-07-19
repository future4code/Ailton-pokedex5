import React from "react";
import Logo from "../../assets/Logo.png";
import Vetor from "../../assets/vetor.png";
import {
  VetorImg,
  Voltar,
  ButtonHeader,
  DivHeader,
  HeaderContainer,
  ImgHeader,
} from "./styled";
import { Title } from "../../styleGeral";
import { useNavigate } from "react-router-dom";
import {
  goToDetailsPage,
  goToHomePage,
  goToPokedex,
} from "../../routes/Coordinator";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <DivHeader>
        <Voltar onClick={() => goToHomePage(navigate)}>
          <VetorImg src={Vetor} />
          Todos os Pokémons
        </Voltar>
      </DivHeader>
      <DivHeader>
        <ImgHeader onClick={() => goToDetailsPage(navigate, 1)} src={Logo} />
      </DivHeader>
      <DivHeader>
        <ButtonHeader onClick={() => goToPokedex(navigate)}>
          Pokedéx
        </ButtonHeader>
      </DivHeader>
    </HeaderContainer>
  );
}
