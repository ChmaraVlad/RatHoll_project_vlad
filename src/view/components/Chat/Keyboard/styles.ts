// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 767px) {
        & {
            max-width: 100%;
            padding: 0px 0px;
        }
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 2px;
    width: 100%;
    grid-template-columns: 1fr ;
    grid-template-rows: 5fr;

    @media (max-width: 767px) {
        & {
            grid-gap: 0px;
        }
    }
`;

export const Row = styled.div`
    display: grid;
    grid-gap: 2px;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: ${({ styles, keyAmount }: {styles: string, keyAmount: number}) => styles ? styles : `repeat(${keyAmount}, 1fr)`};

    @media (max-width: 767px) {
        & {
            grid-gap: 0px;
        }
    }
`;

export const ShowLayoutButton = styled.button`
    display: block;
    height: 40px;
    padding: 5px 10px;
    margin: 0 auto;
    margin-bottom: 5px;
    background-color: black;
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        color: green;
    }
    
`;


export const Button = styled.button`
    z-index: 3;
    padding: 7px 0;
    text-align: center;
    border: 1px solid grey;
    border-radius:5px;
    cursor: pointer;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

    &:active {
        background-color: black;
        color: white;
    }

    ${({ $mode }:{$mode: boolean}) => {
        switch ($mode) {
            case true:
                return `
                    background-color: black;
                    color: white;
                `;
            default:
                return `
                    background-color: white;
                    color: black;
                `;
        }
    }} 
`;

