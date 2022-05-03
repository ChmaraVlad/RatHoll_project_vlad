// Core
import styled from 'styled-components';

export const Container = styled.div`
    `;

export const Wraper = styled.div`
    display: flex;
    overflow: auto;
    position: relative;
    max-width: 90%;
    min-width: 320px;
    height: 500px;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: aqua;
    background: center url('https://i.pinimg.com/736x/8f/87/1d/8f871db726cc745e7f19064655688335.jpg');
    border-radius: 5px;
    font-size: 20px;
    h1{
        text-align: center;
    }
    @media (max-width: 991px) {
        & {
            max-width: 100%;
            font-size: 16px;
        }
    }
    @media (max-width: 768px) {
        & {
            font-size: 16px;
        }
        & > div:first-child {
            display: none;
            width: 20px;
            li{
                display: none;
            }
        }
    }
    @media (max-width: 480px) {
        & {
            font-size: 14px;
        }
    }
`;
