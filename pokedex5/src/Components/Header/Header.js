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

export default function Header({ page }) {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <DivHeader>
        {page !== 'home' &&
          <Voltar onClick={() => goToHomePage(navigate)}>
            <VetorImg src={Vetor} />
            Todos os Pokémons
          </Voltar>}
      </DivHeader>
      <DivHeader>
        <ImgHeader src={Logo} />
      </DivHeader>
      <DivHeader>
        {page === 'home' &&
          <ButtonHeader onClick={() => goToPokedex(navigate)}>
            Pokedéx
          </ButtonHeader>}
        {page === 'details' &&
          <ButtonHeader >
            Liberar Pokémon 
          </ButtonHeader>}
      </DivHeader>
    </HeaderContainer>
  );
}
