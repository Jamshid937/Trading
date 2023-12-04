import React from 'react'
import Container from '../../layout/Container'

import mony from '../../Imgs/mony.png'
import brat from '../../Imgs/brat.png'
import './index.css'
const Header = () => {
    return (
        <div className='header_bg_img'>
            <div className='header_bg2_img'>
                <Container>
                    <div>
                        <h1 className='header__title'>CRYPTOSPACE</h1>
                        <div className='header__text'>
                            <p>система заработка<br></br> на  крипторынке</p>
                            <p>от Азама Ходжаева</p>
                        </div>
                        <div className='animation_text'>
                            
                          <div className="rounded-text rotating">
                            <svg viewBox="0 0 200 200">
                                <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" stroke-width="0"></path>
                                <g font-size="13.1px">
                                    <text text-anchor="start">
                                        <textPath className="coloring" xlink href="#textPath" startOffset="0%" color='#fff'>- Itay Haephrati - UX Engineer - COM-MANDO.COM - Itaycode@gmail.com Jamshdi </textPath>
                                    </text>
                                </g>
                            </svg>
                          </div>
                         <img className='header__img' src={brat} alt="" /> 
                        </div>
                        <div className='header__card'>
                            <div>
                                <p>
                                Получи <br /> проверенные сигналы и инсайдыНачать
                                </p>
                            </div>
                            <div className='border'>
                                <p>Освой главные инструменты трейдинга</p>
                            </div>
                            <div>
                                <button>Начать</button>
                            </div>
                        </div>
                        <div className='header__bottom'>
                            <div>
                               <img src={mony} alt="" /> 
                            </div>
                            <p>Это твоя возможность зарабатывать большие деньги на трейдинге и актуальных инструментах в окружении криптоэнтузиастов со всего мира.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header