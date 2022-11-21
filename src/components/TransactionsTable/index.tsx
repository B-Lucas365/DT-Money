import { useEffect } from "react"
import { api } from "../services/api"
import { Container } from "./styles"

export const TransactionTable = () => { 
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Datas</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Web site</td>
                        <td className="deposit">R$12.800</td>
                        <td>Desenvolvimento</td>
                        <td>17/11/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.800</td>
                        <td>Casa</td>
                        <td>17/11/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}