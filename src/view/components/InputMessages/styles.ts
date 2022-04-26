// Core
import styled from 'styled-components';

export const Form = styled.form`
position: absolute;
bottom: 0;
right: 0;
left: 0;
    input[type=text] {
            position: absolute;
            bottom: 100%;
            right: 10%;
            width: 50%;
            max-width: 1100px;
            height: 50px;
            margin: 0 auto;
            margin-bottom: 10px;
            padding-bottom: 0;
            font-size: 20px;
            color: white;
            background-color: transparent;
            outline: 0;
            border: 0px;
            border-bottom: 2px solid;
        }
    input[type=submit]{
        position: absolute;
        bottom: 10px;
        right: 2%;
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
    @media (max-width: 991px) {
        input[type=text] {
            width: 50%;
            right: 15%;
        }
       
    }
    @media (max-width: 768px) {
        input[type=text] {
            width: 65%;
            right: 20%;
        }
    }
    @media (max-width: 481px) {
        input[type=text] {
            width: 65%;
            right: 25%;
        }
    }
`;
