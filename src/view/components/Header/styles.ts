// Core
import styled from 'styled-components';

export const Header = styled.header`
    max-width: 500px;
    margin:  0 auto;
    padding: 10px 0;
    font-size: 30px;
    text-align: center;
    background-color: rgba(39, 200, 245, 0.6);
    div {
        display: inline-block;
        padding: 5px 10px;
        margin-left: 10px;
        border-radius: 5px;
        color: white;
        background-color: blue;
        &:hover{
            cursor: pointer;
            background-color: aqua;
        }
    }
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
`;
