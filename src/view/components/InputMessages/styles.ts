// Core
import styled from 'styled-components';

export const Form = styled.form`
position: absolute;
bottom: 0;
right: 0;
left: 0;
margin-top: 50px;
    input[type=text] {
            position: absolute;
            bottom: 100%;
            /* left: 0; */
            right: 10%;
            width: 60%;
            max-width: 700px;
            height: 50px;
            margin: 0 auto;
            margin-bottom: 10px;
            padding-bottom: 0;
            font-size: 20px;
            background-color: transparent;
            outline: 0;
            border: 0px;
            border-bottom: 2px solid;
        }
    input[type=submit]{
        position: absolute;
        bottom: 10px;
        right: 50px;
        height: 50px;
        width: 70px;
        outline: 0;
        border: 0;
        border-radius: 5px;
        background-color: blue;
        cursor: pointer;
        color: white;
        font-weight: bold;
        &:hover{
            opacity: .5;
        }
        &:disabled{
            background-color: gray;
        }
    }
    input:focus{
        border: 0px;
        border-bottom: 4px solid blue;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        input[type=text] {
            width: 85%;
        }
        input[type=submit] {
            right: 5px;
            bottom: 10px;
        }
    }
`;
