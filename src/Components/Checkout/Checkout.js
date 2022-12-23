import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../../Subtotal/Subtotal";


function Checkout(){
    return(
        <div className="checkout">
            <div className="checkout-left">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-offer-ads-design-template-15b08d418668f822ce3cc1a7f3aa949f_screen.jpg?ts=1651221075" alt="" className="checkout-ad"/>
                    <div>
                        <h2 className="checkout-title">
                            Your Shopping Basket
                        </h2>
                        <CheckoutProduct />   
                        <CheckoutProduct />
                        <CheckoutProduct />                    
                    </div>
            </div>
            <div className="checkout-right">
                <Subtotal />

            </div>
            
        </div>
    )
}

export default Checkout;