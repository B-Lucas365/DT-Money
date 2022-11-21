import Modal from 'react-modal'
import close from '../../assets/Close.svg'
import { Container, TransactionTypes } from './styles';
import incomeImg from "../../assets/Entrada.svg"
import outcomeImg from "../../assets/Saidas.svg"



interface ModalTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export const ModalTransaction = ({isOpen, onRequestClose}: ModalTransactionProps) => {
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            >
            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={close} alt="close Modal" />
            </button>
            <Container>
                <h2>Cadastrar nova transação</h2>

                <input type="text" placeholder='Titulo'/>
                <input type="number" placeholder='Valor'/>

                <TransactionTypes>
                    <button type='button'>
                        <img src={incomeImg} alt="Income" />
                        <span>Entrada</span>
                    </button>

                    <button type='button'>
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Saída</span>
                    </button>
                </TransactionTypes>

                <input type="text" placeholder='Categoria'/>

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
            
        </Modal>
    )
}