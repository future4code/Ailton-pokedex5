import styled from "styled-components";
import battleButton from "../../assets/battleButton.png";
import { ButtonExcluir } from "../../Components/Header/styled";
import poppins from "../../assets/Fonts/Poppins/Poppins-Regular.ttf";

export const MainBattle = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @font-face {
    font-family: "poppins";
    src: url(${poppins});
  }
`;

export const ContainerChoices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16vw;
  gap: 40px;
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  gap: 40px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ButtonOpp = styled(ButtonExcluir)`
  width: 220px;
  height: 40px;
`;

export const SelectOpp = styled.select`
  width: 220px;
  height: 40px;
  border-radius: 8px;
  text-align: center;
  font-family: "poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
`;

export const Option = styled.option`
  text-transform: capitalize;
`

export const ButtonBattle = styled.button`
  margin: 20px auto;
  width: 100px;
  height: 100px;
  background-image: url(${battleButton});
  background-size: cover;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  animation: scaleButton 3s infinite ease-in-out;
  @keyframes scaleButton {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
