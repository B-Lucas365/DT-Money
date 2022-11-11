import styled from "styled-components"

export const Container = styled.header`
  
  background: #E8E8E8;

`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 7.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #fff;
    background: #A69571;
    border: 0;
    padding: 0 2rem;
    border-radius: 5px;
    height: 3rem;

    transition: filter 0.3s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`