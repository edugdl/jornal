import styled from 'styled-components';

export const Container = styled.header`
    display : flex;
    justifiy-content : center;
    align-items : center;
    width : 100%;
    height : 80px;
    background-color : #324B4C;
    margin-bottom : 80px;
`;

export const Logo = styled.img`
    width : 15%;
`;

export const Botao = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;
    border : none;
    width : 12.5%;
    margin-left: 1.25%;
    height : 50px;
    font-size : 1.7em;
    background-color : #fff;
    color : #324B4C; 
`;

export const Nome = styled.h1`
    display : flex;
    justify-content : center;
    width : 70%;
    font-size : 2em;
    color : #fff
`;