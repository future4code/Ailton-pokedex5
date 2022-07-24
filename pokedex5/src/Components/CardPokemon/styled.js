import styled from "styled-components";
import Poppins from "../../assets/Fonts/Poppins/Poppins-Regular.ttf";
import Inter from "../../assets/Fonts/Inter/static/Inter-Bold.ttf";
import PoppinsBold from "../../assets/Fonts/Poppins/Poppins-Bold.ttf";
import pokedex from "../../assets/pokedexCard.png";

export const ContainerCardPokemon = styled.div`
  display: flex;
  width: 440px;
  height: 210px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  background-image: url(${pokedex});
  background-repeat: no-repeat;
  background-size: 250px;
  background-position: top right;
  margin: 0 10px 55px 10px;
  @font-face {
    font-family: "Poppins";
    src: url(${Poppins});
  }

  @font-face {
    font-family: "Inter";
    src: url(${Inter});
  }
  @font-face {
    font-family: "PoppinsBold";
    src: url(${PoppinsBold});
  }
  @media screen and (max-width: 480px) {
    margin: 0 10px 10px 10px;
    transform: scale(0.8);
  }
`;
export const ContainerNomeTipo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  height: 100%;
  padding-left: 23px;
  padding-top: 25px;
  padding-bottom: 20px;
`;
export const ContainerFotoBotão = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 45%;
  height: 100%;
`;
export const ContainerTypes = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const TypeImg = styled.img`
  height: 33px;
  margin-right: 5px;
`;

export const IdPokemon = styled.p`
  font-family: "Inter";
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: white;
`;
export const PokemonName = styled.p`
  font-family: "Inter";
  font-size: 32px;
  line-height: 39px;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
`;
export const DetalhesTitle = styled.div`
  font-family: "PoppinsBold";
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-decoration-line: underline;
`;

export const ButtonCapturar = styled.button`
  cursor: pointer;
  background-color: white;
  border-radius: 8px;
  border: none;
  width: 146px;
  height: 38px;
  margin-bottom: 13px;
  margin-right: 22px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonLiberar = styled(ButtonCapturar)`
  background-color: #FF6262;
  color:white;
`

export const ImagemPoke = styled.img`
  position: relative;
  top: -35%;
  width: 193px;  
  transition: 0.7s;
  :hover{
    transform: scale(1.2);
  }
`;
export const ContainerImgPoke = styled.div`
  width: 100%;
  height: 75%;
`;
