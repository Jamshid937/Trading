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

