import Modal from 'react-modal'

interface ModalTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export const ModalTransaction = ({isOpen, onRequestClose}: ModalTransactionProps) => {
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            >
            <h2>Cadastrar nova transação</h2>
        </Modal>
    )
}