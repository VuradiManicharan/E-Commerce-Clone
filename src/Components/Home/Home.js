import React from "react";
import "./Home.css";
import Product from "../Product/Product";


const Home = ()=> {
return (
    <div className="home">
    <div className="home__container">
    <img className="home__image"
        src="https://media.istockphoto.com/photos/small-shipping-packages-on-a-notebook-with-the-inscription-online-picture-id1311600080?k=20&m=1311600080&s=612x612&w=0&h=ZEnw3FZ-j6phpaNGLhD8lMo1-f5P3zim2fr7sau-EmE=" alt="..."/>

        
<div className="home__row">
        <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
            id="49538094"
            title="Panasonic 20L Solo Microwave Oven (NN-ST26JMFDG, Silver, 51 Auto Menus)"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Deo+Kg6WL._SL1500_.jpg"
        />
        </div>

        <div className="home__row">
        <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        </div>

        <div className="home__row">
        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        </div>


        
    </div>
    </div>
    )
}

export default Home;