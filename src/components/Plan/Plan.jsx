import React from 'react'
import Container from '../../layout/Container'
import './index.css'
import num1 from '../../Imgs/01.svg'
import num2 from '../../Imgs/02.svg'
import num3 from '../../Imgs/03.svg'
import num4 from '../../Imgs/04.svg'
import num5 from '../../Imgs/05.svg'
import tigger from '../../Imgs/trigger.svg'
import people from '../../Imgs/people.svg'
import sobsheniya from '../../Imgs/sobsheniya.svg'
import trigger2 from '../../Imgs/trigger2.svg'
import shape from '../../Imgs/Shape.png'
import shape2 from '../../Imgs/Shape2.png'
import shape3 from '../../Imgs/Shape3.png'
import shape4 from '../../Imgs/Shape4.png'
import shape5 from '../../Imgs/Shape5.png'
import shape6 from '../../Imgs/Shape6.png'
const Plan = () => {
  return (
    <>
    <div className='plan_bg'>
       <h2 className="plan_title"><span>ПЛАН</span> ДЕЙСТВИЙ?</h2>
        <div className='plan_bg2'>
         <Container>
             <div className='plan_cards'>
               <div className='plan_card'>
                <div className='plan__card__imgs'>
                  <img className='numbers' src={num1} alt="" />
                  <img src={people} className='sticer' alt="" />
                </div>
                 <p className='plan_card_text'>
                  Получи подробные инструкции по использованию <span className='plan_span'>торговых сигналов</span> 
                 </p>
               </div>
               <div className='plan_card'>
                <div className='plan__card__imgs'>
                  <img className='numbers' src={num2} alt="" />
                  <img src={tigger} className='sticer' alt="" />
                </div>
                 <p className='plan_card_text'>
                  Получи подробные инструкции по использованию <span className='plan_span'>торговых сигналов</span> 
                 </p>
               </div>
               <div className='plan_card'>
                <div className='plan__card__imgs'>
                  <img className='numbers' src={num3} alt="" />
                  <img src={sobsheniya} className='sticer' alt="" />
                </div>
                 <p className='plan_card_text'>
                  Получи подробные инструкции по использованию <span className='plan_span'>торговых сигналов</span> 
                 </p>
               </div>
               <div className='plan_card'>
                <div className='plan__card__imgs'>
                  <img className='numbers' src={num4} alt="" />
                  <img src={trigger2} className='sticer' alt="" />
                </div>
                 <p className='plan_card_text'>
                  Получи подробные инструкции по использованию <span className='plan_span'>торговых сигналов</span> 
                 </p>
               </div>
               <div className='plan_card'>
                <div className='plan__card__imgs'>
                  <img className='numbers' src={num5} alt="" />
                  <img src={people} className='sticer' alt="" />
                </div>
                 <p className='plan_card_text'>
                  Получи подробные инструкции по использованию <span className='plan_span'>торговых сигналов</span> 
                 </p>
               </div>
             </div>
              <h3 className='plan_bottom_text'>
               Начни зарабатывать на крипте уже сейчас, даже без опыта и знаний!
             </h3>
             <div className='plan_bottom_btn_container'>
             <button className='plan_bottom_btn'>
              Поехали
             </button>
            </div>
         </Container>
        </div>
    </div>
    <div>
      <Container>
        <h2 className='title_position'>МЫ ЖДЕМ ТЕБЯ, ЕСЛИ ТЫ</h2>
         <div className='position_cards'>
            <div className='position_card'>
               <div className='position_card_imgs'>
                  <div className='position_card_imgs_borders'>
                     <div className='opacity'></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
                  <img src={shape} alt="" />
               </div>
               <h3 className='position_card_title'>
                НОВИЧОК
               </h3>
               <ul className='position_card_text'>
                 <li>Получи пошаговые инструменты и сигналы от экспертов</li>
                 <li>Сформируй собственный портфель</li>
                 <li>Открой свой первый счет и начни торговать</li>
                 <li>Обеспечь себе подушку безопасности</li>
               </ul>
            </div>
            <div className='position_card'>
               <div className='position_card_imgs'>
                  <div className='position_card_imgs_borders'>
                     <div></div>
                     <div className='opacity'></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
                  <img src={shape2} alt="" />
               </div>
               <h3 className='position_card_title'>
                НОВИЧОК
               </h3>
               <ul className='position_card_text'>
                 <li>Получи пошаговые инструменты и сигналы от экспертов</li>
                 <li>Сформируй собственный портфель</li>
                 <li>Открой свой первый счет и начни торговать</li>
                 <li>Обеспечь себе подушку безопасности</li>
               </ul>
            </div>
            <div className='position_card'>
               <div className='position_card_imgs'>
                  <div className='position_card_imgs_borders'>
                     <div></div>
                     <div></div>
                     <div className='opacity'></div>
                     <div></div>
                     <div></div>
                     <div></div>
                  </div>
                  <img src={shape3} alt="" />
               </div>
               <h3 className='position_card_title'>
                НОВИЧОК
               </h3>
               <ul className='position_card_text'>
                 <li>Получи пошаговые инструменты и сигналы от экспертов</li>
                 <li>Сформируй собственный портфель</li>
                 <li>Открой свой первый счет и начни торговать</li>
                 <li>Обеспечь себе подушку безопасности</li>
               </ul>
            </div>
            <div className='position_card'>
               <div className='position_card_imgs'>
                  <div className='position_card_imgs_borders'>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div className='opacity'></div>
                     <div></div>
                     <div></div>
                  </div>
                  <img src={shape4} alt="" />
               </div>
               <h3 className='position_card_title'>
                НОВИЧОК
               </h3>
               <ul className='position_card_text'>
                 <li>Получи пошаговые инструменты и сигналы от экспертов</li>
                 <li>Сформируй собственный портфель</li>
                 <li>Открой свой первый счет и начни торговать</li>
                 <li>Обеспечь себе подушку безопасности</li>
               </ul>
            </div>
            <div className='position_card'>
               <div className='position_card_imgs'>
                  <div className='position_card_imgs_borders'>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div className='opacity'></div>
                     <div></div>
                  </div>
                  <img src={shape5} alt="" />
               </div>
               <h3 className='position_card_title'>
                НОВИЧОК
               </h3>
               <ul className='position_card_text'>
                 <li>Получи пошаговые инструменты и сигналы от экспертов</li>
                 <li>Сформируй собственный портфель</li>
                 <li>Открой свой первый счет и начни торговать</li>
                 <li>Обеспечь себе подушку безопасности</li>
               </ul>
            </div>
            <div className='position_card'>
               <div className='position_card_imgs'>
                  <div className='position_card_imgs_borders'>
                     <div ></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div className='opacity'></div>
                  </div>
                  <img src={shape6} alt="" />
               </div>
               <h3 className='position_card_title'>
                НОВИЧОК
               </h3>
               <ul className='position_card_text'>
                 <li>Получи пошаговые инструменты и сигналы от экспертов</li>
                 <li>Сформируй собственный портфель</li>
                 <li>Открой свой первый счет и начни торговать</li>
                 <li>Обеспечь себе подушку безопасности</li>
               </ul>
            </div>
         </div>
      </Container>
    </div>
    </>
  )
}

export default Plan