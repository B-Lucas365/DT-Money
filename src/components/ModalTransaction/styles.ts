import styled from 'styled-components'

export const Container = styled.form`
    h2{
        color: var(--goldcolor);
        font-size: 1.5rem;
        margin-bottom: 2rem;
        
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 5px;
        border: 1px solid #B7B7B7;
        background: var(--greycolor);
        font-weight: 400;
        font-size: 1rem;
        color: var(--goldcolor);
        outline: none;
        &::placeholder{
            color: var(--goldcolor);
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--goldcolor);
        color: var(--whitecolor);
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        margin-top: 1rem;
        font-weight: 600;

        transition: .3s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`

export const TransactionTypes = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:.5rem;
`



interface RadioBoxProps {
    isActive: boolean
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #B7B7B7;
    border-radius: 5px;
    background: ${(props) => props.isActive ? 'transparent' : '#E8E8E8'};
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--goldcolor);
    }
`