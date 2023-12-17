import { Modal } from 'flowbite-react'
import React from 'react'
import Carusel from '../../components/Carusel/Carusel'
import Collapse from '../../components/Collapse/Collapse'
import Fakt from '../../components/Fakt/Fakt'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import Main from '../../components/Main/Main'
import Plan from '../../components/Plan/Plan'
import Tarif from '../../components/Tarif/Tarif'

const Home = () => {
  return (
    <>
<Header/>
<Main/>
<Plan/>
<Fakt />
<Carusel/>
<Modal/>
<Tarif/>
<Collapse/>
<Info/>
    </>
  )
}

export default Home