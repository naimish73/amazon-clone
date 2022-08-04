import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img
                    className="checkout-ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/prime/PrimeDeals/Test/vxd-737_Prime_Deals_Test_OS_SP_Hero_v1_3000x600_2x.jpg"
                    alt="amazon ad"
                />
                {/* 
                left here basket refresh problem bug in site loading
            */}
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one one or
                            more items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout-title">Your Shopping Basket</h2>
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout-right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
