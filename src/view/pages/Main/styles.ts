// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0,0,0,.1);
    @media (max-width: 781px) {
        & {
            max-width: 100%;
        }
    }
`;

export const Wraper = styled.div`
    display: flex;
    overflow: auto;
    position: relative;
    max-width: 500px;
    min-width: 320px;
    height: 46%;
    max-height: 500px;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 0 0 70px 0 ;
    background-color: aqua;
    background: center url('https://i.pinimg.com/736x/8f/87/1d/8f871db726cc745e7f19064655688335.jpg');
    border-radius: 5px;
    font-size: 20px;
    h1{
        text-align: center;
    }
    @media (max-width: 991px) {
        & {
            font-size: 16px;
        }
    }
    @media (max-width: 480px) {
        & {
            max-width: 100%;
            font-size: 14px;
        }
    }
`;
