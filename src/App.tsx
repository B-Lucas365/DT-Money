import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { ModalTransaction } from './components/ModalTransaction'

import { GlobalStyle } from "./styles/global"
import { TransactionProvider } from './TransactionsContext'

Modal.setAppElement('#root');

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

  return(
    <TransactionProvider>
      <Header onOpenModal={openModal}/>
      <Dashboard />
      <ModalTransaction isOpen={modalIsOpen} onRequestClose={closeModal} />
      <GlobalStyle />
    </TransactionProvider>
  )
}