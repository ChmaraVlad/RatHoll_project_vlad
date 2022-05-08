// Core
import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,65,63,1) 51%, rgba(128,73,133,1) 100%);
`;

export const Main = styled.div`
    height: 100%;
    padding-top: 250px;
    background: no-repeat center url(https://cloudfront-us-east-1.images.arcpublishing.com/octane/OLI2T2NCPJCJJCYOBNVPKKA2AA.jpg);
`;

export const ErrorItem = styled.div`
    max-width: 100%;
    overflow-wrap: break-word;
`;

export const FormWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 25%;
    min-width: 300px;
    min-height: 250px;
    margin: 0 auto;
    padding: 10px 5px;

    font-size: 30px;
    background: rgba(255, 0, 0, 0.71);
    text-align: center;
    color: #fff;
    border-radius: 40%;
    
    input,button {
        height: 30px;
        width: 80%;
        max-width: 100%;
        border-radius: 5px;
        font-size: 15px;
    }

    *:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Input = styled.input`
    &:focus {
        color: green;
        font-weight: bold;
        padding: 0 5px;
    }
`;

export const Button = styled.button`
    &:hover{
        background-color: rgba(132, 0, 0, .3);
        color: #fff;
        box-shadow: inset 0px 0px 29px 1px rgba(0,0,0,0.6);
    }
`;
