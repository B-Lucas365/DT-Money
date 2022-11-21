import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { ModalTransaction } from './components/ModalTransaction'

import { GlobalStyle } from "./styles/global"

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
    <>
      <Header onOpenModal={openModal}/>
      <Dashboard />
      <ModalTransaction isOpen={modalIsOpen} onRequestClose={closeModal} />
      <GlobalStyle />
    </>
  )
}