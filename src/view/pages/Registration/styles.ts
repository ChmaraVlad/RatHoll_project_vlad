// Core
import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,65,63,1) 51%, rgba(128,73,133,1) 100%);
    * {
        box-sizing: border-box;
    }
`;

export const Main = styled.div`
    height: 100%;
    padding-top: 250px;
    background: no-repeat center url(https://cloudfront-us-east-1.images.arcpublishing.com/octane/OLI2T2NCPJCJJCYOBNVPKKA2AA.jpg);
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    min-width: 300px;
    min-height: 250px;
    margin: 0 auto;
    padding: 10px 5px;
    background: #bec5d3;
    text-align: center;
    border-radius: 5px;
    form {
        display: flex;
        width: 100%;
        max-width: 300px;
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
