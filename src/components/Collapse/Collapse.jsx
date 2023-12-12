import React from 'react'
import './index.css'
import vektor from '../../Imgs/vektor.svg'
const Collapse = () => {
    const faqs = document.querySelectorAll(".faq");


    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    })
    return (
        <div>
            <div className="faq">
                <div className="question">
                    <img src={vektor} alt="" />
                    <h3>У меня получится, если я новичок?</h3>
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
                    <h3>У меня получится, если я новичок?</h3>
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
                    <h3>У меня получится, если я новичок?</h3>
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
                    <h3>У меня получится, если я новичок?</h3>
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
                    <h3>У меня получится, если я новичок?</h3>
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