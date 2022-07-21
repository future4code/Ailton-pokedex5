import styled from "styled-components";
import PoppinsBold from "../../assets/Fonts/Poppins/Poppins-Regular.ttf"

export const DivNav = styled.div`
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 10px;
    @font-face {
        font-family: "PoppinsBold";
        src: url(${PoppinsBold});
    }

`
export const PNav = styled.p`
font-family:"PoppinsBold";
        color: white;
        cursor: pointer;
        font-weight: 600;
    :hover{
        text-decoration: underline;
    }
`
export const PAtual = styled.p`
font-family:"PoppinsBold";
font-weight:600;
color:white;
background-color:rgba(0, 0, 0, 0.3);
padding:4px 8px;
border-radius:50%;
`