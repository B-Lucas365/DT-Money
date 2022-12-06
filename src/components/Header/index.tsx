import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './Styles'

interface HeaderProps {
    onOpenModal: () => void;
}

export const Header = ({onOpenModal}: HeaderProps) => {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money" />
                <button onClick={onOpenModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}