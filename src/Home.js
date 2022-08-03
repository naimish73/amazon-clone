import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img
                className="home-image"
                src="https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2021/01/AmazonPrimeVideo-genetic.jpg"
                alt="background poster"
            />
            <div className="home-row">
                <Product
                    id="1165168"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://5.imimg.com/data5/ANDROID/Default/2021/12/HX/YZ/PU/142959141/product-jpeg-500x500.jpg"
                />
                <Product
                    id="1165168"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://5.imimg.com/data5/ANDROID/Default/2021/12/HX/YZ/PU/142959141/product-jpeg-500x500.jpg"
                />
            </div>
            <div className="home-row">
                <Product
                    id="1165168"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://5.imimg.com/data5/ANDROID/Default/2021/12/HX/YZ/PU/142959141/product-jpeg-500x500.jpg"
                />
                <Product
                    id="1165168"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://5.imimg.com/data5/ANDROID/Default/2021/12/HX/YZ/PU/142959141/product-jpeg-500x500.jpg"
                />
                <Product
                    id="1165168"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://5.imimg.com/data5/ANDROID/Default/2021/12/HX/YZ/PU/142959141/product-jpeg-500x500.jpg"
                />
            </div>
            <div className="home-row">
                <Product
                    id="1165168"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://5.imimg.com/data5/ANDROID/Default/2021/12/HX/YZ/PU/142959141/product-jpeg-500x500.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
