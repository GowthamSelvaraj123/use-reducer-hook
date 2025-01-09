import React from "react";
import PlaceHolder from "../../image.svg";
export default function ProductCard(props) {
    return (
        <div className="col-lg-4">
        <div class="card ms-10">
            <img class="card-img-top" src={PlaceHolder} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <p className="price">${props.price}</p>
                <a href="#" class="btn btn-primary" onClick={() => props.addToCart(props)}>Add To Cart</a>
            </div>
        </div>
        </div>
        )
}