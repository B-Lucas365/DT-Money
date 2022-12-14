import { useEffect, useState, useContext } from "react"
import { TransactionContext } from "../../TransactionsContext"
import { api } from "../services/api"
import { Container } from "./styles"



export const TransactionTable = () => { 
    const {transactions }= useContext(TransactionContext)

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format()}
                            </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
        </Container>
    )
}