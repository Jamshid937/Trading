import React from 'react'
import'./index.css'
import trading from '../../Imgs/trading.png'
import trading2 from '../../Imgs/trading2.png'
import trading3 from '../../Imgs/trading3.png'
import trading4 from '../../Imgs/trading4.png'
import trading5 from '../../Imgs/trading5.png'
import Container from '../../layout/Container';
import { Carousel } from 'flowbite-react';
import carousel_img from '../../Imgs/trigger_carousel.svg'


const Carusel = () => {
  return (
<div className='carusel_bg'>
 <Container>
  <h2 className='carusel_title'>СИГНАЛЫ</h2>
  <p className='carusel_text'>Сигналы и инсайдерсая информация стабильно помогают моим ученикам зарабатывать и получать хорошие % профита</p>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-4">
      <Carousel>
        <img src={trading} alt="..." className='carousel_img' />
        <img src={trading2} alt="..."className='carousel_img'/>
        <img src={trading3} alt="..."className='carousel_img' />
        <img src={trading4} alt="..."className='carousel_img' />
        <img src={trading5} alt="..."className='carousel_img' />
        <img src={trading5} alt="..."className='carousel_img' />
      </Carousel>
    </div>
    <img className='carousel_bottom_img' src={carousel_img} alt="" />
    <p className='carousel_bottom_text'>Мы адаптировали материал для новичков и подготовили практические примеры с подробными разборами</p>
    <p className='carousel_bottom_text2'>У ТЕБЯ ТОЧНО ВСЁ ПОЛУЧИТСЯ!</p>
    <button className='carousel_bottom_btn'>занять место</button>
 </Container>
</div>
  )
}

export default Carusel