import styled from "styled-components";
import Inter from "../../assets/Fonts/Inter/static/Inter-Bold.ttf";
import pokebola from "../../assets/pokedexCard.png";

export const ContainerCardBattle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 360px;
  margin: 0 auto;
  min-height: 65vh;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  background-image: url(${pokebola});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;

  @font-face {
    font-family: "Inter";
    src: url(${Inter});
  }
`;

export const ContainerInfo = styled.div`
  width: 300px;
  margin-bottom: 3px;
`;
export const PokeImg = styled.img`
  position: relative;
  margin-left: 235px;
  width: 20px;
  transform: scale(8.5);
  transition: 0.7s;
  :hover {
    transform: scale(9);
  }
`;

export const ContainerTypes = styled.div`
  display: flex;
  margin-top: 6px;
`;
export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  strong {
    color: #404040;
  }
`;
export const Stat = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const ContainerTotal = styled.div`
  display: flex;
  font-family: "Inter";
  color: white;
  font-weight: 700;
`;
