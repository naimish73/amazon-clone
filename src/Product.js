import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_) => {
                            return <p>⭐</p>;
                        })}
                </div>
            </div>

            <img src={image} alt="img of product" />
            <button>Add to basket</button>
        </div>
    );
}

export default Product;