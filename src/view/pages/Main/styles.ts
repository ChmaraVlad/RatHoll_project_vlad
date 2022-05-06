// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    width: 100%;
    max-width: 768px;
    max-height: 95%;
    margin: 0 auto;
    padding-top: 20px;

    @media (max-width:781px) {
        max-width: 100%;
        padding: 0;
    }

/* ----------------------------- */
    @media (max-height: 990px) {
        & {
            padding: 0;
        } 
    }
`;

export const Header = styled.header`
    width: 100%;
    margin:  0 auto;
    padding: 10px 0;
    font-size: 30px;
    text-align: center;
    background-color: rgba(229, 229, 229, 1);
    border-radius: 5px 5px 0 0;

    @media (max-width: 991px) {
        & {
            padding: 10px 0;
            font-size: 25px;
        }
    }

    @media (max-width: 480px) {
        & {
            padding: 5px 0;
            font-size: 20px;
        }
    }

    /* ---------------------------- */
    @media (max-height: 768px) {
        & {
            padding: 3px 0;
            font-size: 24px;
        }
    }
    @media (max-height: 480px) {
        & {
            padding: 3px 0;
            font-size: 20px;
        }
    }
`;

export const Button = styled.div`
    display: inline-block;
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
    color: white;
    background-color: black;
    &:hover{
        cursor: pointer;
        color: green;
    }

     /* ---------------------------- */
     @media (max-height: 480px) {
        & {
            padding: 2px 5px;
            font-size: 20px;
        }
    }
`;
