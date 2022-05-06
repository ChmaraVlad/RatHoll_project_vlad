// Core
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: sticky;
    bottom: 0;
    height: 50px;
    background-color: rgba(229, 229, 229, 1);
    display: flex;

    /* ------------------------------------ */
    @media (max-height: 768px) {
        &,& button {
            height: 40px;
        }
    }
    @media (max-height: 480px) and (max-width: 990px) {
        &,& button {
            height: 30px;
        }
    }
`;

export const Input = styled.input`
    flex: 1 1 auto;
    padding-left: 10px;
    font-size: 20px;
    color: black;
    background-color: transparent;
    outline: 0;
    border: 0px;
`;

export const Button = styled.button`
    height: 50px;
    width: 70px;
    outline: 0;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    & svg:hover{
        color: blue;
    }
    &:disabled {
        opacity: .3;
    }
`;
