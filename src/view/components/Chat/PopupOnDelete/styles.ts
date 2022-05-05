// Core
import styled from 'styled-components';

export const Container = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 500ms;
`;

export const Popup = styled.div`
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 10px;
    p {
        margin-bottom: 20px;
    }
`;

export const Button = styled.button`
    display: inline-block;
    background-color: ${({ bgcolor }:{bgcolor: string}) => bgcolor};
    cursor: pointer;
    &:hover {
        background-color: rgba(166, 166, 166, .5);
    }
    &:not(:first-child) {
        margin-left: 10px;
    }
`;
