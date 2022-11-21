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

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--whitecolor);
        padding: 3rem;
        position: relative;
        border-radius: 5px;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        &:hover{
            filter: brightness(0.9);
        }
    }

`
