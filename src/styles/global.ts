import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --greycolor: #E8E8E8;
        --goldcolor: #A69571;
        --lightcolor: #EEE3CB;
        --whitecolor: #fff; 
        --blackcolor: #000;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5% ;
        }
    }


    body{
        background: var(--bodycolor);
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity:.6;
        cursor: not-allowed;
    }

    body, input , textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }

`
