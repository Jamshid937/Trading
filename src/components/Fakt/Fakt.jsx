import React from 'react'
import Container from '../../layout/Container'
import up from '../../Imgs/up.svg'
import './index.css'
const Fakt = () => {
  return (
    <div className='fakt_bg'>
        <Container>
            <h2 className='fakt_title'>ФАКТ</h2>
            <p className='fakt_text'>Главное для заработка на крипте — быть в курсе инсайдов, приватной информации, сигналов на вход в самые прибыльные проекты.</p>
            <p className='fakt_text2'>Ты получишь доступ к проверенным торговым сигналам на вход и выход из позиций, которые помогут зарабатывать при любом знании рынка без усилий. Мы все сделаем за тебя, главное следуй правилам и соблюдай риск-менеджмент.</p>
            <div className='fakt_card'>
              <img src={up} alt="" />
              <p>Торговые сигналы — это рекомендации опытных трейдеров по тому, когда открыть/закрыть сделку.</p>
            </div>
        </Container>
    </div>
  )
}

export default Fakt