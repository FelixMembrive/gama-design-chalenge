import { useState } from 'react'
import Box from './components/Box'
import Header from './components/Header'

function App() {

  const alertUser = () => {
    alert("olá usuário")
  }

  return (
    <>
      <Header />
      <Box>
        <>
        <button onClick={alertUser}>Clique aqui</button>
        </>
      </Box> 
    </>
  )
}

export default App
