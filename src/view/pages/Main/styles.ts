// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    width: 100%;
    max-width: 600px;
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

    @media (max-height: 480px) and (max-width: 990px) {
        & {
            max-width: 85%;
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


export const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
    width: 100%;
    min-width: 320px;
    height: 45%;
    min-height: 500px;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: aqua;
    background: center url('https://i.pinimg.com/736x/8f/87/1d/8f871db726cc745e7f19064655688335.jpg');
    border-radius: 5px;
    font-size: 20px;

    @media (max-width: 991px) {
        & {
            font-size: 15px;
        }
    }

    @media (max-width: 780px) {
        & {
            max-width: 100%;
            min-height: 400px;
        }
    }

    @media (max-width: 480px) {
        & {
            max-width: 100%;
            min-height: 300px;
        }
    }
/* -------------------------------- */
    @media (max-height: 990px) and (max-width: 481px) {
        & {
            min-height: 60%;
            margin-bottom: 5px;
        }
    }

    @media (max-height: 780px) and (max-width: 481px) {
        & {
            /* min-height: 70%; */
            /* margin-bottom: 5px; */
        }
    }

    @media (max-height: 480px) and (max-width: 990px) {
        & {
            min-height: 85%;
            margin-bottom: 5px;
        }
    }
`;
