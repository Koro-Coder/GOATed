import React from 'react'
import './slider.css'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import TopCard from './Top-card';
import sliderItems from './data'

export default function Slider() {
  const [ind, setInd] = React.useState(0);
  
  function increament(){
    setInd(Math.abs(ind + sliderItems.length +1) % sliderItems.length);
  }

  function decreament(){
    setInd(Math.abs(ind + sliderItems.length -1) % sliderItems.length);
  }

  const cardList = sliderItems.map((ele)=><TopCard index={ele.id-1}/>)
  return (
    <div className='slider'>
        <div className='arrow left-arrow' onClick={decreament}>
            <KeyboardDoubleArrowLeftOutlinedIcon/>
        </div>
        <div className='top-list' style={{transform:`translateX(${-ind*110}vw)`}}>
            {cardList}
        </div>

        <div className='arrow right-arrow' onClick={increament}>
            <KeyboardDoubleArrowRightOutlinedIcon/>
        </div>
    </div>
)
}