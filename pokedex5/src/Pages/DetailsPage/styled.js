import styled from "styled-components";
import pokeball from "../../assets/pokeball.png";
import Inter from "../../assets/Fonts/Inter/static/Inter-ExtraBold.ttf";
import Montserrat from "../../assets/Fonts/Montserrat/static/Montserrat-Regular.ttf";
import Back from "../../assets/BackDetail.png";

export const DetalheCard = styled.div`
  width: 1389.14px;
  height: 663px;
  background-color: ${(props) => props.color};
  border-radius: 37.8857px;
  margin: 0 auto;
  margin-top: 56px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 200px;
  @font-face {
    font-family: "Inter";
    src: url(${Inter});
  }
  @font-face {
    font-family: "Montserrat";
    src: url(${Montserrat});
  }
  @media screen and (min-width: 1180px) and (max-width: 1440px) {
    transform: scale(0.8);
    width: 1200px;
  }
  @media screen and (max-width: 1179px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 680px;
    height: 860px;
    padding: 20px;
  }
  @media screen and (max-width: 690px) {
    width: 96vw;
    margin-top: 100px;
    height: auto;
    display: flex;
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

export const ContainerDetails = styled.div`
  background-image: url(${Back});
  background-position: top center;
  background-size: 1235px 1170px;
  background-repeat: no-repeat;
  top: 50px;
`;

export const ImageFront = styled.div`
  grid-area: 1/1/2/2;
  margin-top: 24px;
  margin-left: 44px;
  margin-right: 34px;
  margin-bottom: 23.5px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1179px) {
    grid-area: 3/1/4/2;
    width: 300px;
    margin: 0 auto;
  }  
  transition: 0.7s;
`;
export const ImageBack = styled.div`
  grid-area: 2/1/3/2;
  margin-top: 23.5px;
  margin-left: 44px;
  margin-right: 34px;
  margin-bottom: 26px;
  background-color: white;
  border-radius: 8px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1179px) {
    grid-area: 3/2/4/3;
    width: 300px;
    margin: 0 auto;
  }
`;

export const ImgDetails = styled.img`
  height: 250px;  
  transition: 0.7s;
  :hover{
    transform: scale(1.2);
  }
`;

export const StatusCard = styled.div`
  grid-area: 1/2/3/3;
  margin-top: 24px;
  padding: 18px;
  margin-bottom: 26px;
  background-color: white;
  border-radius: 12px;
  font-family: "Inter";
  font-weight: 800;
  @media screen and (max-width: 1179px) {
    grid-area: 1/2/3/3;
    height: 350px;
    width: 300px;
    margin: 0 auto;
    margin-top: 172px;
    @media screen and (max-width: 690px) {
      margin: 0 auto;
    }
  }
`;

export const PokeballDiv = styled.div`
  grid-area: 1/3/3/5;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-image: url(${pokeball});
  background-size: cover;
  background-position: right;
  display: grid;
  @media screen and (max-width: 1179px) {
    grid-area: 1/1/3/3;
    background-position: center;
    @media screen and (max-width: 690px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const PokemonDetail = styled.div`
  grid-area: 1/1/3/2;
  margin-left: 68px;
  margin-bottom: 26px;
  margin-top: 24px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  font-family: "Inter";
  font-weight: 800;
  @media screen and (max-width: 1179px) {
    margin: 0 auto;
  }
`;
export const PokeMoves = styled.div`
  padding: 18px;
  background-color: white;
  border-radius: 8px;
  font-family: "Inter";
  font-weight: 800;
  grid-area: 2/1/5/2;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1179px) {
    height: 350px;
    width: 300px;
    border-radius: 12px;
    margin-top: 36px;
  }
`;
export const PokeName = styled.div``;
export const PokeLetra = styled.p`
  font-size: 48px;
  line-height: 58px;
  color: white;
  font-family: "Inter";
  font-weight: 700px;
  font-style: bold;
  text-transform: capitalize;
`;
export const PokeId = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: white;
  font-weight: 700;
`;
export const TypeImg = styled.img`
  height: 33px;
  margin-top: 10px;
  margin-right: 16px;
`;
export const TitleInfo = styled.p`
  font-weight: 800;
  font-family: "Inter";
  font-size: 24px;
  line-height: 29.05px;
  margin-bottom: 15px;
`;
export const PokePhoto = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 690px) {
    grid-area: 1/1/2/2;
  }
`;
export const PokeOut = styled.img`
  position: relative;
  top: -40%;
  width: 270px;
  height: 270px;
  @media screen and (max-width: 690px) {
    width: 170px;
    height: 170px;
    left: 80px;
    top: -130px;
  }  
  transition: 0.7s;
  :hover{
    transform: scale(1.2);
  }
`;

export const Move = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 10px;
  width: fit-content;
  background-color: #ececec;
  border: dashed 1px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  margin-bottom: 18px;
  text-transform: capitalize;
`;
export const DivMoves = styled.div`
  margin-top: 20px;
  flex-grow: 1;
  overflow: auto;
  font-family: "Montserrat";
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ContainerStates = styled.div`
  display: flex;
  border-top: 0.01px solid rgba(0, 0, 0, 0.1);
`;

export const ContainerTotal = styled(ContainerStates)`
  border-bottom: 0.01px solid rgba(0, 0, 0, 0.1);
`;

export const StatsName = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  min-width: 72px;
  height: 33px;
  font-size: 16px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #737373;
`;

export const StatsValue = styled.p`
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 16px;
  min-width: 47px;
  height: 33px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #404040;
`;
