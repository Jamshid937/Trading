import React from 'react'
import Container from '../../layout/Container'
import './index.css'
import statusUp from '../../Imgs/statusUp.svg'
const Main = () => {
  return (
    <>
    
    <Container>
      <div className='main_size'>
      <div className='main'>
       <h2>ЧТО ТЫ ПОЛУЧИШЬ?</h2>
       <div className='main_card'>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Проверенные сигналы по торговле и инсайды экспертов</p>
         </div>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Сделки без потери активов</p>
         </div>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Возможность попасть в закрытое комьюнити криптонов</p>
         </div>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Новое сильное окружение</p>
         </div>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Рабочие инструменты инвестирования и торговли 2023-2024</p>
         </div>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Авторские методики инвестирования и торговли от экспертов</p>
         </div>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Инструменты для любых способов заработка на трейдинге</p>
         </div>
         <div className='main_card_box'>
           <img src={statusUp} alt="" />
           <p>Участие в самых трендовых и прибыльных проектах</p>
         </div>
       </div>
    </div>
  </div>
</Container>
    <div className='main__bg'>
        <Container>
          <h2 className='main_bootom_title'>
            ЧТО ВНУТРИ?
          </h2>
          <div className='main__bottom__cards'>
            <div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>1</div>
               <p className='main__bottom__cards__text'>Обучающая платформа с понятным интерфейсом, где вся важная информация всегда перед глазами</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>2</div>
               <p className='main__bottom__cards__text'>Короткие видеоуроки</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>3</div>
               <p className='main__bottom__cards__text'>
                 платформа с понятным интерфейсом, где вся важная информация всегда перед глазами</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>4</div>
               <p className='main__bottom__cards__text'>Закрытый информационный Telegram-канал</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>5</div>
               <p className='main__bottom__cards__text'>Чат участников на 40-50 человек</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>6</div>
               <p className='main__bottom__cards__text'>Эффективные практические задания</p>
            </div>
            </div>
            <div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>7</div>
               <p className='main__bottom__cards__text'>Рубрики «Вопрос-ответ» от кураторов</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>8</div>
               <p className='main__bottom__cards__text'>Комплексная поддержка кураторов, модераторов и комьюнити-менеджеров на каждом этапе</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>9</div>
               <p className='main__bottom__cards__text'>Живые встречи с Азамом и живой нетворкинг</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>10</div>
               <p className='main__bottom__cards__text'>Выездные тусовки комьюнити</p>
            </div>
            <div className='main__bottom__card'>
               <div className='main__bottom__cards__num'>11</div>
               <p className='main__bottom__cards__text'>Совместный рост и развитие, поиск новых проектов и повышение доходов</p>
            </div>
           </div>
          </div>
        </Container>
    </div>
  </>
  )
}

export default Main