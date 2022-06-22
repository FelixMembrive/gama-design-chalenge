import { useState } from 'react'
import Box from './components/Box/Box'
import Header from './components/Header/Header'

import LogoCheckout from "../../assets/icons/checkout.png"
import LogoFavorites from "../../assets/icons/favorite.png"
import LogoLocalization from "../src/assets/icons/localization.png"
import LogoProfile from "../src/assets/icons/profile.png"
import IconLink from './components/IconLink/IconLink'

function App() {

  const alertUser = () => {
    alert("olá usuário")
  }

  return (
    <>
      <Header/>
    </>
  )
}

export default App
