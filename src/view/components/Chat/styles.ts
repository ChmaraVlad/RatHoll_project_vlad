// Core
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    max-width: 65%;
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
`;

export const ListItem = styled.li`
    display: inline-block;
    max-width: 90%;
    padding: 5px 10px;
    margin-left: 5px;
    list-style: none;
    font-size: 20px;
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
        align-items: center;
        .username{
            flex: 1 1 auto;
        }
        .options {
            margin-left: 10px;
            padding: 2px 3px;
            color: green;
            border: 1px green solid;
            border-radius: 3px;
        }
        span {
            font-size: 12px;
            cursor: pointer;
        }
        span:not(:first-child) {
            margin-left: 5px;
        }
        .update:hover, .delete:hover {
            color: blue;
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
        overflow-wrap: break-word;
    }
`;
