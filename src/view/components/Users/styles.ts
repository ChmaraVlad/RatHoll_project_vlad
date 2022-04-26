// Core
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 250px;
    max-height: 100%;
    overflow-y: auto;
   
`;

export const ListItem = styled.li`
    height: 30px;
    list-style: none;
    padding: 5px;
    img{
        border-radius: 50px;
        height: 25px;
        width: 25px;
        margin-right: 10px;
    }
    border-bottom: 1px solid;
    background-color: white;
`;
