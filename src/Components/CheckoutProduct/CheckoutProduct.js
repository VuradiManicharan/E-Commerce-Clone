import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct(){
    return(
        <div className="checkoutProduct">
            <img src="https://m.media-amazon.com/images/I/61Deo+Kg6WL._SL1500_.jpg" alt="" className="checkoutProduct-image"/>

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">Panasonic 20L Solo Microwave Oven (NN-ST26JMFDG, Silver, 51 Auto Menus)</p>
                
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>239.0</strong>
                </p>
                    <div className="checkoutProduct-rating">
                    🌟🌟
                    </div>
                    <button>Remove from Basket</button>              
            </div>
    </div>


    )
}

export default CheckoutProduct;