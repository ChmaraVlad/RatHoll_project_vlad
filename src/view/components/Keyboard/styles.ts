// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 20px;
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
    margin-bottom: 10px;
    background-color: blue;
    color: white;
    font-weight: bold;
    text-align: center;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        border-color: green;
        color: green;
    }
    
`;


export const Button = styled.button`
    position: relative;
    background-color: ${({ bgcolor }: {bgcolor: string}) => bgcolor};
    z-index: 3;
    padding: 10px 0;
    text-align: center;
    border: 1px solid grey;
    border-radius:5px;
    cursor: pointer;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    &:active {
        background-color:#a7a3a3;
    } 
`;
