import React from 'react'
import './index.css'
import vektor from '../../Imgs/vektor.svg'
import { useState } from 'react'

const Collapse = () => {
const [isOpen, setIsOpen] = useState(null)
    
const toggle = (i) => {
if(isOpen === i){
  return setIsOpen(null)
}
setIsOpen(i)
}

    return (
      <>
      <h2 className='collapse_title'>ОТВЕТЫ НА ПОПУЛЯРНЫЕ ВОПРОСЫ</h2>
        {data.map((item ,i)=>(
         <div className={isOpen === i ? 'faq active':'faq'}>
            <div className="question" onClick={()=> toggle(i)}>
                <h3>{item.question}</h3>
                <img src={vektor} alt="" />
                </div>
                <div className='ansver'>
                    <p>
                        {item.ansver}
                    </p>
                </div>
            </div>
        ))}

       </>
    )
}

const data = [
{
question: "Смогу ли я заказать во время праздников?",
ansver:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet."
},
{
    question: "Смогу ли я заказать во время праздников?",
    ansver:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet."
},
{
    question: "Смогу ли я заказать во время праздников?",
    ansver:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet." 
},
{
    question: "Смогу ли я заказать во время праздников?",
    ansver:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet."
},
{
    question: "Смогу ли я заказать во время праздников?",
    ansver:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, vel. Lorem ipsum dolor sit amet."
    },
]

export default Collapse