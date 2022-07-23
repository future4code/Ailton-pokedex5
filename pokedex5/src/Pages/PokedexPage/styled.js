import styled from "styled-components";
import battleIco from "../../assets/battlePokedex.webp";

export const ContainerPokedex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBattle = styled.div`
  background-image: url(${battleIco});
  width: 100px;
  height: 100px;
  background-size: cover;
  cursor: pointer;
  transition: 1s;
  :hover{
    transition: 1s;
    transform: rotate(8deg);
  }
`;
