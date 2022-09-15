import styled from "styled-components";
import PoppinsBold from "../../assets/Fonts/Poppins/Poppins-Bold.ttf";

export const ContainerAlert = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.62);
  user-select: none;
  @font-face {
    font-family: "PoppinsBold";
    src: url(${PoppinsBold});
  }
`;

export const TextAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 451px;
  height: 222px;
  background-color: white;
  border-radius: 12px;
`;

export const TitleAlert = styled.p`
  font-family: "PoppinsBold";
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
`;

export const DescriptionAlert = styled.p`
  font-family: "PoppinsBold";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
