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
    & li.my-msg {
        align-self: flex-end;
    }
`;

export const ListItem = styled.li`
    display: inline-block;
    align-self: ${({ alignSelf }:{alignSelf: string}) => alignSelf};
    max-width: 90%;
    padding: 5px 10px;
    margin: 0 5px;
    margin-bottom: 20px;
    list-style: none;
    background-color: white;
    border-radius: 10px;
`;

export const HeaderItem = styled.div`
    position: relative;
    font-size: 14px;
    font-weight: bold;
    color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextItem = styled.div`
    margin: 10px 0;
    overflow-wrap: break-word;
`;

export const UserName = styled.div`
    flex: 1 1 auto;
`;

export const Options = styled.div`
    width: 50px;
    margin-left: 10px;
    margin-right: -10px;
    padding: 2px 3px;
    span {
        font-size: 12px;
        cursor: pointer;
    }
    span:not(:first-child) {
        margin-left: 10px;
    }
    img {
        max-width: 15px;
    }
`;

export const InputUpdate = styled.input`
    @media (max-width: 480px) {
        max-width: 100px;
    }
`;

export const TimeItem = styled.div`
    text-align: right;
    font-size: 14px;
    font-weight: bold;
    color: blue;
`;

export const AnyMessages = styled.div`
    position: absolute;
    top: 50%;
    left: 15%;
    h1 {
        color: white;
        font-weight: bold;
    }
`;
