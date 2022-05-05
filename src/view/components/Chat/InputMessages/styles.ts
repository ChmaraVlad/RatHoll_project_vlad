// Core
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const Input = styled.input`
    position: absolute;
    bottom: 100%;
    right: 20%;
    width: 75%;
    max-width: 1100px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: 10px;
    padding-bottom: 0;
    font-size: 20px;
    color: white;
    background-color: transparent;
    outline: 0;
    border: 0px;
    border-bottom: 2px solid;

    @media (max-width: 481px) {
        & {
            right: 25%;
            width: 70%;
        }
        &:focus {
            border: 0px;
            border-bottom: 4px solid blue;
            border-radius: 5px;
        }
    }
`;

export const Button = styled.button`
    position: absolute;
    bottom: 8px;
    right: 2%;
    height: 50px;
    width: 70px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    background-color: blue;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        opacity: .5;
    }
    &:disabled{
        background-color: gray;
    }

    @media (max-width: 481px) {
        bottom: 0;
        right: 0;
        height: 40px;
    }
`;
