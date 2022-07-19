import React from 'react'
import Logo from '../../assets/Logo.png'
import Vetor from '../../assets/vetor.png'
import { VetorImg, Voltar, ButtonHeader, DivHeader, HeaderContainer, ImgHeader } from './styled'
import { Title } from '../../styleGeral'

export default function Header() {
  return (
    <HeaderContainer>
      <DivHeader>
        <Voltar><VetorImg src={Vetor}/>Todos os Pokémons</Voltar>
      </DivHeader>
      <DivHeader>
        <ImgHeader src={Logo} />
      </DivHeader>
      <DivHeader>
        <ButtonHeader>Pokedéx</ButtonHeader>
      </DivHeader>
    </HeaderContainer>
  )
}
