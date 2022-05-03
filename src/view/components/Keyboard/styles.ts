// Core
import styled from 'styled-components';

export const ShowLayoutButton = styled.button`
    display: block;
    height: 40px;
    padding: 5px 10px;
    margin: 0 auto;
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

export const Row = styled.div`
    display: grid;
    grid-gap: 2px;
    width: 100%;
    grid-template-columns: repeat(10, 1fr) ;
    /* grid-template-rows: 1fr; */
    grid-template-rows: ${(props: {styles: string}) => props.styles ? props.styles : '1fr'};
`;

export const Button = styled.button`
    position: relative;
    background-color: #fff;
    z-index: 3;
    padding: 10px 0;
    text-align: center;
    border: 1px solid grey;
    border-radius:5px;
    cursor: pointer;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    &:active {
        box-shadow: 0px 5px 8px 2px rgba(2, 3, 3, 0.3) inset;
    } 
`;

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 1fr ;
    grid-template-rows: 5fr;
`;

export const Container = styled.section`
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 20px;
/* 
    .keyboard__container {
        position: relative;
        z-index: 1;
        max-width: 800px;
        margin: 0 auto;
        padding: 10px 20px;
    } */

    /* .keyboard__body {
        display: grid;
        grid-gap: 2px;
        grid-template-columns: 1fr ;
        grid-template-rows: 5fr;
    } */

    /* .keyboard__row {
        display: grid;
        grid-gap: 2px;
        width: 100%;
        grid-template-columns: repeat(10, 1fr) ;
        grid-template-rows: 1fr;
    } */
/* 
    .keyboard__row--smaller {
        grid-template-columns: repeat(9, 1fr) ;
    }

    .keyboard__row--footer {
        grid-template-columns: 1.20fr 1.3fr 4fr 1.20fr 1.3fr ;
    }
    
    .keyboard__row--ru {
        grid-template-columns: repeat(12, 1fr) ;
    }

    .keyboard__row--ru-small {
        grid-template-columns: repeat(11, 1fr) ;
    } */
    

`;
