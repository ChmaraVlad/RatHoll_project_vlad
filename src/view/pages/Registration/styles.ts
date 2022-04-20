// Core
import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    padding-top: 100px;
    * {
        box-sizing: border-box;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
`;

export const FormWrapper = styled.section`
    width: 30%;
    margin: 0 auto;
    padding: 10px 5px;
    background: #bec5d3;
    text-align: center;
    border-radius: 5px;
    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        label{
            font-size: 30px;
        }
        input{
            height: 30px;
            border-radius: 5px;
            font-size: 15px;
        }
        input[type=submit]:hover{
            background-color: #fff;
            box-shadow: inset 0px 0px 29px 1px rgba(0,0,0,0.6);
        }
        input[type=text]:focus{
            color: green;
            font-weight: bold;
            padding: 0 5px;
        }
        label,input {
            width: 80%;
            max-width: 100%;
        }
        *:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`;
