import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './Styles'


export const Header = () => {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money" />
                <button>Nova Transação</button>
            </Content>
        </Container>
    )
}