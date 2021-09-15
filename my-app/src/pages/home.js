import React from 'react'
import Button from '../components/button';
import Assets from '../assets/bmw-sedan.jpeg';
import Logo from '../assets/rr.png';
import Footer from '../components/footer';
import Header from '../components/header';
import Products from '../components/products';
function home() {
    return (
        <div>
            <div className="bg-banner">
                <div className="banner ">
                    <div className="slider">
                        <img src={Assets} id="slideImage"></img>
                    </div>
                    <div className="overlay ">
                        <Header></Header>
                        <div className="navbar  ">

                            <div className="content ">
                                <p className=" text-5xl">Lets <span className="text-red-700"> Start Buyning </span> and Selling <span className="text-yellow-600">Production</span> </p>
                                <p className="text-sm my-3">Whether you are just starting out or looking for new ways to grow, Oberlo will help you start a profitable dropshipping business on Shopify. Take a peek at our free live webinars or comprehensive guides.</p>
                                <Button></Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Products></Products>

                <Footer></Footer>
            </div >

        </div>
    )
}

export default home
