import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import {App} from './App'

createServer({
    models: {
        transaction: Model,
    },
    
    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelancer web site',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 6000,
                    createAt: new Date()
                },

                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'Casa',
                    amount: 700,
                    createAt: new Date()
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data)
        })
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <App />
)
