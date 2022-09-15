import styled from "styled-components";
import poppins from "../../assets/Fonts/Poppins/Poppins-Regular.ttf";
import poppinsBold from "../../assets/Fonts/Poppins/Poppins-Bold.ttf";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  @font-face {
    font-family: "poppins";
    src: url(${poppins});
  }
  @font-face {
    font-family: "poppinsBold";
    src: url(${poppinsBold});
  }
  @media screen and (max-width: 910px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 910px) {
    .box1 {
      order: 2;
    }
    .box2 {
      order: 1;
    }
    .box3 {
      order: 3;
    }
  }
`;

export const DivHeader = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  @media screen and (max-width: 910px) {
    width: 300px;
  }
`;

export const ImgHeader = styled.img`
  height: 113px;
  @media screen and (max-width: 910px) {
    height: 80px;
  }
`;

export const ButtonHeader = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  background: #33a4f5;
  border-radius: 8px;
  border: none;
  font-family: "poppinsBold";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: white;
  @media screen and (max-width: 910px) {
    transform: scale(0.8);
  }
`;
export const ButtonExcluir = styled.button`
  cursor: pointer;
  width: 226px;
  height: 57px;
  font-family: "poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: white;
  background-color: #ff6262;
  border: none;
  border-radius: 8px;
  @media screen and (max-width: 910px) {
    transform: scale(0.8);
    margin-top: 14px;
  }
`;

export const ButtonCapturar = styled(ButtonExcluir)`
  background-color: #33a4f5;
`;

export const Voltar = styled.p`
  cursor: pointer;
  font-family: "poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-decoration-line: underline;
  color: #1a1a1a;
  @media screen and (max-width: 910px) {
    text-align: center;
    width: 300px;
    transform: scale(0.8);
    font-size: 20px;
  }
`;
export const VetorImg = styled.img`
  height: 14.58px;
  width: 7.29px;
  margin-right: 10.38px;
`;
