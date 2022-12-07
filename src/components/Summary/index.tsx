import { useContext } from "react"
import { Container } from "./styles"
import incomeImg from '../../assets/Entrada.svg'
import outcomeImg from '../../assets/Saidas.svg'
import totalImg from '../../assets/Total.svg'
import { TransactionContext } from "../../TransactionsContext"


export const Summary = () => {
    const { transactions } = useContext(TransactionContext)
    console.log(transactions)

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$1000</strong>
            </div>
        </Container>
    )
}