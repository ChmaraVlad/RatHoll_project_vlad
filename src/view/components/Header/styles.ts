// Core
import styled from 'styled-components';

export const Header = styled.header`
    padding: 20px 0;
    font-size: 40px;
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
    @media (max-width: 980px) {
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
