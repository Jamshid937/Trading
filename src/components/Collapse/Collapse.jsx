import React from 'react'
import './index.css'
import vektor from '../../Imgs/vektor.svg'
import { useState } from 'react'
const Collapse = () => {
    const [collapse, setCollapce] = useState(false)
    const faqs = document.querySelectorAll(".faq");




    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    })
    return (
        <div>
            <div className='faq'>
                <div className="question">
                    <img src={vektor} alt="" />
                    <h3>Есть ли у вас инженеры в компании?</h3>
                </div>
                <div className="ansver">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="faq">
                <div className="question">
                    <img src={vektor} alt="" />
                    <h3>Делаете ли вы отчистку газгольдера?</h3>
                </div>
                <div className="ansver">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="faq">
                <div className="question">
                    <img src={vektor} alt="" />
                    <h3>А вы не испортите газон у меня и соседей?</h3>
                </div>
                <div className="ansver">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="faq">
                <div className="question">
                    <img src={vektor} alt="" />
                    <h3>Вы предоставляете документы для субсидий?</h3>
                </div>
                <div className="ansver">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="faq">
                <div className="question">
                    <img src={vektor} alt="" />
                    <h3>Смогу ли я заказать во время праздников?</h3>
                </div>
                <div className="ansver">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Collapse