import styled from "styled-components";
import pokeball from '../../assets/pokeball.png'
import Inter from '../../assets/Fonts/Inter.ttf'

export const DetalheCard = styled.div`
width: 1389.14px;
height: 663px;
background-color: #729f92;
border-radius: 37.8857px;
margin: 0 auto;
margin-top: 56px;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(4, 1fr);
@font-face {
    font-family: "Inter";
    src: url(${Inter});
}
`
export const ImageFront = styled.div`
grid-area: 1/1/2/2;
margin-top: 26px;
margin-left: 44px;
margin-right: 34px;
margin-bottom: 23.5px;
background-color: white;
border-radius: 8px;
`
export const ImageBack = styled.div`
grid-area: 2/1/3/2;
margin-top: 23.5px;
margin-left: 44px;
margin-right: 34px;
margin-bottom: 26px;
background-color: white;
border-radius: 8px;
border: 2px solid white;
`
export const StatusCard = styled.div`
padding: 18px;
grid-area: 1/2/3/3;
margin-top: 24px;
margin-bottom: 26px;
background-color: white;
border-radius: 12px;
font-family: "Inter";
font-weight: 800;
`
export const PokemonDetail = styled.div`
grid-area: 1/1/3/2;
margin-left: 68px;
margin-bottom: 26px;
margin-top: 24px;
display: flex;
flex-direction: column;
font-family: "Inter";
font-weight: 800;

`
export const PokeballDiv = styled.div`
grid-area: 1/3/3/5;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
background-image: url(${pokeball});
background-size: cover;
background-position: right;
display: grid;
`
export const PokeMoves = styled.div`
background-color: white;
flex-grow: 3;
border-radius: 8px;
font-family: "Inter";
font-weight: 800;
`
export const PokeName = styled.div`
flex-grow: 1;
`
export const PokeLetra = styled.p`
font-size: 48px;
line-height: 58px;
color: white;
font-family: 'Inter';
font-weight: 700px;
font-style: bold;
`
export const PokeId = styled.p`
font-size: 16px;
line-height: 19px;
color: white;
font-weight: 700;
`
export const TypeImg = styled.img`
height: 33px;
margin-right: 16px;
`