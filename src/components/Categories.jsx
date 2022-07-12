import React from 'react'
import {categories} from './data'
import './categories.css'
import CategoryCard from './category-card';

export default function Category() {
    const cards = categories.map((ele)=><CategoryCard img={ele.img} title={ele.title}/>);
  return (
    <div className='categories'>
        {cards}
    </div>
  )
}
