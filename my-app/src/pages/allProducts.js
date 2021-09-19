import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Assets from '../assets/caro.jpeg';
import Cart from '../components/cart';
function allProducts() {

    return (
        <div>
            <Header></Header>

            <div className=" h-screen">

                <div className="w-full pt-32 shadow-lg flex ">
                    {/* <div className=" w-1/4  left-bar ">
                        <div className="  ">
                            <div className="  justify-around w-full  ">
                                <p className="p-6   ">Vehicles</p>
                                <p className=" p-6 ">Fashions</p>
                                <p className=" p-6 ">Bikes</p>
                            </div>
                            <div className="  w-full justify-around  ">
                                <p className="  p-6" >Furniture</p>
                                <p className="  p-6 ">Animals</p>
                                <p className="  p-6 ">Properties</p>

                            </div>
                            <div className="   w-full justify-around  ">
                                <p className="  p-6 ">Bussines</p>
                                <p className="  p-6 ">Jobs</p>
                                <p className="  p-6 ">Mobile</p>

                            </div>
                        </div>
                    </div> */}
                    <div className="w-full bgSlide bg-white">
                        <div>
                            <Cart></Cart>
                        </div>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default allProducts
