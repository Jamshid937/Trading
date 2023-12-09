import React from 'react'
import './index.css'

import left from '../../Imgs/left.svg'
import right from '../../Imgs/right.svg'
const Modal = () => {
    const scrollLeft = () => {
        document.getElementById('content').scrollLeft -= 370;
    }
    const scrollRight = () => {
        document.getElementById('content').scrollLeft += 370;
    }
    return (
        <>
            <h2 className='modal_title'>ПРОГРАММА <br /> И ФОРМАТ ОБУЧЕНИЯ</h2>
            <div className='modal_btn'>
                <button onClick={scrollLeft}>
                    <img src={left} alt="" />
                </button>
                <p className='modal_btn_text'>листай</p>
                <button onClick={scrollRight}>
                    <img src={right} alt="" />
                </button>
            </div>
            <div className='modal_cards' id='content'>
               <div className="modal_card">
                  <div className='modal_card_btn'>модуль 1</div>
                  <h3>БАЗА ТРЕЙДИНГА</h3>
                  <ul className='modal_card_list'>
                    <li className='modal_card_list_item'><span>Урок 1.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 2.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 3.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 4.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                  </ul>
               </div>
               <div className="modal_card">
                  <div className='modal_card_btn'>модуль 1</div>
                  <h3>БАЗА ТРЕЙДИНГА</h3>
                  <ul className='modal_card_list'>
                    <li className='modal_card_list_item'><span>Урок 1.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 2.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 3.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 4.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                  </ul>
               </div>
               <div className="modal_card">
                  <div className='modal_card_btn'>модуль 1</div>
                  <h3>БАЗА ТРЕЙДИНГА</h3>
                  <ul className='modal_card_list'>
                    <li className='modal_card_list_item'><span>Урок 1.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 2.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 3.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 4.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                  </ul>
               </div>
               <div className="modal_card">
                  <div className='modal_card_btn'>модуль 1</div>
                  <h3>БАЗА ТРЕЙДИНГА</h3>
                  <ul className='modal_card_list'>
                    <li className='modal_card_list_item'><span>Урок 1.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 2.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 3.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 4.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                  </ul>
               </div>
               <div className="modal_card">
                  <div className='modal_card_btn'>модуль 1</div>
                  <h3>БАЗА ТРЕЙДИНГА</h3>
                  <ul className='modal_card_list'>
                    <li className='modal_card_list_item'><span>Урок 1.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 2.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 3.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 4.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                  </ul>
               </div>
               <div className="modal_card">
                  <div className='modal_card_btn'>модуль 1</div>
                  <h3>БАЗА ТРЕЙДИНГА</h3>
                  <ul className='modal_card_list'>
                    <li className='modal_card_list_item'><span>Урок 1.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 2.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 3.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                    <li className='modal_card_list_item'><span>Урок 4.</span> База криптовалюты и рынка, на чем все строится и развивается</li>
                  </ul>
               </div>
               
            </div>
        </>
    )
}

export default Modal
// МОДУЛЬ 1 БАЗА ТРЕЙДИНГАУрок 1. База криптовалюты и рынка, на чем все строится и развиваетсяУрок 2. Безопасность при работе
// с криптовалютойУрок 3. Обзор и регистрация
// на необходимых ресурсах, покупка первых монетУрок 4. Развитие насмотренности и трендов внутри рынкаМОДУЛЬ 2РИСК-МЕНЕДЖМЕНТУрок 1. Определение риск-портфеляУрок 2. Мани-менеджментУрок 3. Правила инвестирования,
// или как правильно формировать свой портфельУрок 4. Хеджирование рисковМОДУЛЬ 3ТЕХНИЧЕСКИЙ АНАЛИЗУрок 1. Введение в технический анализ и обзор TradingViewУрок 2. Уровни сопротивления и поддержкиУрок 3. Фигуры графического анализаУрок 4. Трендовые индикаторыУрок 5. Осцилляторы+ практические заданияМОДУЛЬ 4ФУНДАМЕНТАЛЬНЫЙ АНАЛИЗУрок 1. Введение в фундаментальный анализ и методы оценки проектаУрок 2. Новостной анализ проектов
// и полезные сервисыМОДУЛЬ 5ТОРГОВЛЯ КРИПТОВАЛЮТЫ НА СПОТЕУрок 1. Обзор перспективных криптовалют 2023 годаУрок 2. ТОП ошибок при торговле
// на спотеУрок 3. Сигналы, применение
// и практикаМОДУЛЬ 6ФЬЮЧЕРСНАЯ И МАРЖИНАЛЬНАЯ СТРАТЕГИЯУрок 1. Введение во фьючерсную
// и маржинальную торговлю, главные отличияУрок 2. ТОП ошибок и советы при работе с производными финансовыми инструментамиУрок 3. Практика: фьючерсная торговляУрок 4. Практика: маржинальная торговляУрок 5. Психология при работе
// с криптовалютой+ практические задания+ бонусные уроки от психолога-трейдера
