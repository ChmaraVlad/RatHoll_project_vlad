// Core
import styled from 'styled-components';

export const Form = styled.form`
    input[type=text] {
            position: absolute;
            bottom: 100%;
            left: 0;
            right: 0;
            max-width: 800px;
            height: 50px;
            margin: 0 auto;
            margin-bottom: 10px;
            background-color: transparent;
            outline: 0;
            border: 0px;
            border-bottom: 2px solid;
        }
        input[type=button]{
            position: absolute;
            bottom: 105%;
            right: 0;
            height: 30px;
            width: 50px;
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
        }
        input:focus{
            border: 0px;
            border-bottom: 4px solid blue;
            border-radius: 5px;
        }
`;
