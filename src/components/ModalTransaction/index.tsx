import Modal from 'react-modal'
import close from '../../assets/Close.svg'
import { Container, TransactionTypes, RadioBox } from './styles';
import { FormEvent, useState, useContext } from 'react';

import incomeImg from "../../assets/Entrada.svg"
import outcomeImg from "../../assets/Saidas.svg"

import incomeImgWhite from "../../assets/EntradaBranco.svg"
import outcomeImgWhite from "../../assets/SaidasBranco.svg"
import { TransactionContext } from '../../TransactionsContext';


interface ModalTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export const ModalTransaction = ({isOpen, onRequestClose}: ModalTransactionProps) => {
    const {createTransaction} = useContext(TransactionContext)

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState("")
    const [type, setType] = useState("deposit")

    const handleNewTransaction = async (event: FormEvent) => {
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit')
        onRequestClose()

    }

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
            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastrar nova transação</h2>

                <input 
                    type="text" 
                    placeholder='Titulo' 
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />
                
                <input 
                    type="number" 
                    placeholder='Valor' 
                    value={amount} 
                    onChange={event => 
                    setAmount(Number(event.target.value))}
                />

                <TransactionTypes>
                    <RadioBox 
                        type='button' 
                        isActive={type === "deposit"}
                        onClick={() => {setType("deposit")}}
                    >
                        {type === "deposit" && <img src={incomeImgWhite} alt="Income" />}
                        {type !== "deposit" && <img src={incomeImg} alt="Income" />}
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button' 
                        isActive={type === "withdraw"}
                        onClick={() => {setType("withdraw")}}
                    >
                        {type === "withdraw" && <img src={outcomeImgWhite} alt="Income" />}
                        {type !== "withdraw" && <img src={outcomeImg} alt="Income" />}
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypes>

                <input 
                    type="text" 
                    placeholder='Categoria' 
                    value={category} 
                    onChange={event => setCategory(event.target.value)}
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
            
        </Modal>
    )
}