import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div{
        background: var(--lightcolor);
        padding: 1.5rem 2rem;
        border-radius:5px;
        color: var(--goldcolor);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 500;
        }

        &.highLight-background{
            background: var(--goldcolor);
            color: var(--whitecolor);
        }
    }

`
