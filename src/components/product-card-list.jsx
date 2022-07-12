import ProductCards from "./product-cards";
import './product-card-list.css'
import {popularProducts} from './data'

export default function ProductCardList(){

    const cards = popularProducts.map((ele)=>
    <ProductCards image={ele.img} desc={ele.desc} title={ele.title} price={ele.price}/>
    )

    return(
        <div className="product-card-List">
            {cards}
        </div>
    )
}