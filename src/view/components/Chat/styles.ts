// Core
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    
    max-width: 90%;
    min-width: 320px;
    height: 500px;
    margin: 0 auto;
    background-color: aqua;
    background: center url('https://i.pinimg.com/736x/8f/87/1d/8f871db726cc745e7f19064655688335.jpg');
    overflow: auto;
    border-radius: 5px;
    margin-bottom: 50px;
    h1{
        text-align: center;
    }
    @media (max-width: 768px) {
        max-width: 100%;
  }
`;
