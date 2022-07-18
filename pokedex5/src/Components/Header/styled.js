import styled from 'styled-components'
// import Poppins from '../../assets/Fonts/Poppins-Regular.ttf'

export const HeaderContainer = styled.div`
width: 100%;
height: 160px;
display: flex;
border: 1px solid black;
justify-content: space-between;
`

export const DivHeader = styled.div`
flex-grow: 1;
display: flex;
align-items: center;
justify-content: center;
width: 200px;
`

export const ImgHeader = styled.img` 
height: 113px;
`

export const ButtonHeader = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 287px;
height: 74px;
background: #33A4F5;
border-radius: 8px;
border: none;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: white;
`