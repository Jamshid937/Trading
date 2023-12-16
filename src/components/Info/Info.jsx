import React from 'react'
import './index.css'
import Container from '../../layout/Container'
import karta from '../../Imgs/karta.svg'
import bnb from '../../Imgs/bnb.png'
import usdt from '../../Imgs/usdt.png'
const Info = () => {
  return (
    <div className='info'>
      <Container>
       <h2 className='info_title'>
         ОПЛАТИТЬ ПРОГРАММУ И ДОСТУП К СИГНАЛАМ МОЖНО КРИПТОЙ
       </h2>
       <div className='info_cards'>
          <div className='info_card'>
            <img src={karta} alt="" />
            <p>Тариф «БАЗА»</p>
            <span>500 USDT</span>
          </div>
          <div className='info_card'>
            <img src={karta} alt="" />
            <p>Тариф «БАЗА»</p>
            <span>500 USDT</span>
          </div>
          <div className='info_card'>
            <img src={karta} alt="" />
            <p>Тариф «БАЗА»</p>
            <span>500 USDT</span>
          </div>
       </div>
       <h2 className='info_bottom_title'>Кошельки для оплаты:</h2>
        <div className='info_bottom_cards'>
            <div className='info_bottom_card'>
              <div className='bnb_container'>
                <img src={bnb} alt="" />
                <p>USDT BEP-20 <br /> (BNB SMART CHAIN)</p>
              </div>
              <p>0xb5f2497Da760F06E7F67dE7Ca36F38A1C845BF53</p>
            </div>
            <div className='info_bottom_card'>
              <div className='bnb_container'>
                <img src={usdt} alt="" />
                <p>USDT trc-20 <br /> (TRON)</p>
              </div>
              <p>TLssWmCW4z15VhqTmKjgf3fVs3vFjHH96N</p>
            </div>
        </div>
        <div className='info_ssilka'>
          <p className='info_ssilka_text'>После оплаты обязательно заполните эту форму по <a href="">ссылке</a> и с Вами свяжутся для добавления в канал и на платформу.</p>
          <p className='info_ssilka_bottom'>Если есть вопросы по оплате криптой — пишите в телеграм <a href="#">@nastykhod</a> (Настя)</p>
        </div>
</Container>
    </div>
  )
}

export default Info