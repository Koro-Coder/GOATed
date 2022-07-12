import React from "react";
import './product-cards.css'

export default function ProductCards(props){
    return(
        <div className="product-card">
            <img className="product-img" src={props.image} />
            <h2>{props.title}</h2>
            <p>
                {props.desc}
            </p>
            <h3>Price : {props.price}</h3>
        </div>
    )
}