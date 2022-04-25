// Core
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    max-width: 90%;
    min-width: 320px;
    height: 600px;
    margin: 0 auto;
    background-color: aqua;
    background: center url('https://i.pinimg.com/736x/8f/87/1d/8f871db726cc745e7f19064655688335.jpg');
    overflow: auto;
    border-radius: 5px;
    h1{
        text-align: center;
    }
    @media (max-width: 760px) {
        max-width: 100%;
  }
`;
