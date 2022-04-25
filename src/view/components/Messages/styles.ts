// Core
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    flex: 1 1 auto;
    overflow-y: auto;
    h1{
        text-align: center;
        font-size: 30px;
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
