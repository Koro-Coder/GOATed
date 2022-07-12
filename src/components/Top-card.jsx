import React from 'react'
import './top-card.css'
import sliderItems from './data'

export default function TopCard(props) {
    const index = props.index;
    const ele = sliderItems[index];
  return (
    <div id={ele.id} className='top-card' style={{backgroundColor:'#'+ele.bg}}>
        <div className='model' style={{backgroundColor:'#'+ele.modelBg}}>
            <img src={ele.img} alt="Something Good"/>
        </div>
        <div className='top-desc'>
            <h1>{ele.title}</h1>
            <p>
                {ele.desc}
            </p>
            <button>
                SHOP NOW
            </button>
        </div>
    </div>
  )
}
