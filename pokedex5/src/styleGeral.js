import styled from 'styled-components'

export const DivApp = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
background-color: rgba(94, 94, 94, 1);
`
export const Title = styled.h3`
font-size: 48px;
color: white;
font-family: "Poppins";
font-weight: 700;
font-style: normal;
line-height: 72px;
margin-top: 60px;
margin-left: 40px;
margin-bottom: 55px;
@media screen and (max-width: 910px) {
    font-size: 40px;
}
`
export const MainGeral = styled.main`
display: grid;
grid-template-columns: repeat(auto-fill, 460px);
justify-content: center;
height: 100%;
@media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, 460px);

}
`