import React from 'react'
import './index.css'
import karta from '../../Imgs/karta.svg'
import chart from '../../Imgs/chart.svg'
import { useState } from 'react'
const Tarif = () => {
    const [close, setclose] = useState(false)
    const handleEnter = () => setclose(true)
    const handleclose = (e) => {
        setclose(false)
        e.preventDefault()
    }
  return (
    <>
    <div>
         <h2 className='tarif_title'>ТАРИФЫ</h2>
         <div className='tarif_cards'>
            <div className='tarif_card'>
                <div className='tarif_card_header'>
                    <h3 className='tarif_card_title'>База</h3>
                    <img className='tarif_card_img' src={karta} alt="" />
                </div>
                <div className='tarif_card_item1'>
                    <img src={chart} alt="" />
                    <p>Сигналы</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Анализ рынка</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Стартовый депозит 100$ в подарок</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Доступ на 2 месяца</p>
                </div>
            <div className='tarif_card_form'>
                <h3 className='tarif_card_form_title'>СТОИМОСТЬ</h3>
                <p className='tarif_card_form_text'>Оплатить онлайн-интенсив можно картой или в рассрочку. Мы ее предоставляем без процентов.</p>
                <span className='tarif_card_form_number'>49 000 ₽</span>
                <div className='tarif_card_form_buttons'>
                    <button className='tarif_card_form_btn' onClick={handleEnter}>Оформить заказ</button>
                    <button className='tarif_card_form_btn2' onClick={handleEnter}>Оформить в рассрочку</button>
                </div>
            </div>
            </div>
            <div className='tarif_card'>
                <div className='tarif_card_header'>
                    <h3 className='tarif_card_title'>База</h3>
                    <img className='tarif_card_img' src={karta} alt="" />
                </div>
                <div className='tarif_card_item1'>
                    <img src={chart} alt="" />
                    <p>Сигналы</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Анализ рынка</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Стартовый депозит 100$ в подарок</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Доступ на 2 месяца</p>
                </div>
            <div className='tarif_card_form'>
                <h3 className='tarif_card_form_title'>СТОИМОСТЬ</h3>
                <p className='tarif_card_form_text'>Оплатить онлайн-интенсив можно картой или в рассрочку. Мы ее предоставляем без процентов.</p>
                <span className='tarif_card_form_number'>49 000 ₽</span>
                <div className='tarif_card_form_buttons'>
                    <button className='tarif_card_form_btn' onClick={handleEnter}>Оформить заказ</button>
                    <button className='tarif_card_form_btn2' onClick={handleEnter}>Оформить в рассрочку</button>
                </div>
            </div>
            </div>
            <div className='tarif_card'>
                <div className='tarif_card_header'>
                    <h3 className='tarif_card_title'>База</h3>
                    <img className='tarif_card_img' src={karta} alt="" />
                </div>
                <div className='tarif_card_item1'>
                    <img src={chart} alt="" />
                    <p>Сигналы</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Анализ рынка</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Стартовый депозит 100$ в подарок</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Доступ на 2 месяца</p>
                </div>
            <div className='tarif_card_form'>
                <h3 className='tarif_card_form_title'>СТОИМОСТЬ</h3>
                <p className='tarif_card_form_text'>Оплатить онлайн-интенсив можно картой или в рассрочку. Мы ее предоставляем без процентов.</p>
                <span className='tarif_card_form_number'>49 000 ₽</span>
                <div className='tarif_card_form_buttons'>
                    <button className='tarif_card_form_btn' onClick={handleEnter}>Оформить заказ</button>
                    <button className='tarif_card_form_btn2' onClick={handleEnter}>Оформить в рассрочку</button>
                </div>
            </div>
            </div>
            <div className='tarif_card'>
                <div className='tarif_card_header'>
                    <h3 className='tarif_card_title'>База</h3>
                    <img className='tarif_card_img' src={karta} alt="" />
                </div>
                <div className='tarif_card_item1'>
                    <img src={chart} alt="" />
                    <p>Сигналы</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Анализ рынка</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Стартовый депозит 100$ в подарок</p>
                </div>
                <div className='tarif_card_item'>
                    <img src={chart} alt="" />
                    <p>Доступ на 2 месяца</p>
                </div>
            <div className='tarif_card_form'>
                <h3 className='tarif_card_form_title'>СТОИМОСТЬ</h3>
                <p className='tarif_card_form_text'>Оплатить онлайн-интенсив можно картой или в рассрочку. Мы ее предоставляем без процентов.</p>
                <span className='tarif_card_form_number'>49 000 ₽</span>
                <div className='tarif_card_form_buttons'>
                    <button className='tarif_card_form_btn' onClick={handleEnter}>Оформить заказ</button>
                    <button className='tarif_card_form_btn2' onClick={handleEnter}>Оформить в рассрочку</button>
                </div>
            </div>
            </div>
         </div>
         <p className='tarif_bottom_text'>Также можно</p>
         <button className='tarif_bottom_btn'>Оплатить криптой</button>
    </div>
    <div className={close ? 'modal active' : 'modal'}>
        <div onClick={handleclose} className='modal_close'>x</div>
        <div className='modal_form'>
            <h2 className='modal_form_title'>CRYPTO SPACE БИЗНЕС</h2>
            <form action="" className='modal_form_inputs'>
               <input type="email" required/>
               <input type="text" required/>
               <input type="tel" name="" id="" required/>
               <button  className='modal_form_btn'>Оформить заказ</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Tarif