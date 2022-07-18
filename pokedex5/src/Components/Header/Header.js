import React from 'react'
import Logo from '../../assets/Logo.png'
import {  ButtonHeader, DivHeader, HeaderContainer, ImgHeader } from './styled'

export default function Header() {
  return (
    <HeaderContainer>
      <DivHeader></DivHeader>
      <DivHeader>
        <ImgHeader src={Logo} />
      </DivHeader>
      <DivHeader>
        <ButtonHeader>Pokedéx</ButtonHeader>
      </DivHeader>
    </HeaderContainer>
  )
}
