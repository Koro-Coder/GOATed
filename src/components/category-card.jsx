import React from 'react'

export default function CategoryCard(props) {
  return (
    <div className='category-card'>
        <img src={props.img}/>
        <h1>{props.title}</h1>
    </div>
  )
}
