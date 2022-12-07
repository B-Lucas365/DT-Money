import { createContext , useState, useEffect, ReactNode} from "react";
import { api } from "./components/services/api";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

interface TransactionProviderProps {
    children: ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
)


export const TransactionProvider = ({children}: TransactionProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    const createTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post('/transactions', {
            ...transactionInput, 
            createdAt: new Date()
        })
        const {transaction} = response.data

        setTransactions([
            transaction, ...transactions
        ])
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}