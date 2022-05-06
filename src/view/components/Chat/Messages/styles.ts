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

    /* ---------------------------- */
    @media (max-height: 480px) {
        & {
            padding: 2px 10px;
            font-size: 20px;
        }
    }
`;

export const HeaderItem = styled.div`
    position: relative;
    font-size: 14px;
    font-weight: bold;
    color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Avatar = styled.span`
    display: inline-block;
    margin-right: 10px;
    img {
        max-width: 35px;
    }

    @media (max-height: 480px) {
        & img {
            max-width: 30px;
        }
    }
`;

export const TextItem = styled.div`
    margin: 10px 0;
    overflow-wrap: break-word;

    /* ---------------------------- */
    @media (max-height: 480px) {
        & {
            margin: 5px 0;
        }
    }
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

        svg:hover {
            color: blue;
        }
    }
    span:not(:first-child) {
        margin-left: 10px;
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
    font-weight: 600;
    color: black;
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
