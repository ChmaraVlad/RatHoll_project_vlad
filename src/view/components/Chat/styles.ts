// Core
import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    max-width: 50%;
    height: 600px;
    background-color: aqua;
    overflow: auto;
    background: center url('https://i.pinimg.com/736x/8f/87/1d/8f871db726cc745e7f19064655688335.jpg');
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
`;

export const ListItem = styled.li`
    display: inline-block;
    padding: 5px 10px;
    list-style: none;
    font-size: 20px;
    vertical-align: middle;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 10px;
    .header{
        position: relative;
        font-size: 14px;
        font-weight: bold;
        color: red;
        display: flex;
        justify-content: space-between;
        span {
            margin-left: 10px;
            cursor: pointer;
            font-size: 16px;
        }
        .options {
            position: absolute;
            right: -125px;
            top: 0;
            background-color: white;
            border-radius: 5px;
            display: none;
        }
        .etc:hover .options{
            display: block;
            color: black;
        }
        .etc:hover {  
            /* color: black; */
        }
    }
    .time{
        text-align: right;
        font-size: 14px;
        font-weight: bold;
        color: blue;
    }
    .text{
        margin: 10px 0;
    }
`;
