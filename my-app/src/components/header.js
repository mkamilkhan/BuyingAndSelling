import React from 'react'

import Logo from '../assets/rr.png';

import { Link } from 'react-router-dom';

export default function header() {



    return (
        <div id="home" className="bg-banner " >
            <div className="logo bg-yellow-500 fixed  items-center w-full flex ">
                <div className="text-white flex items-center">
                    <div className="rounded-full bg-white ">

                        <img src={Logo} className="w-32 slideImag"></img>
                    </div>

                    <p className="mx-3 text-3xl">
                        <span className="text-yellow-600">
                            BUYNING
                        </span>  PRODUCTION</p>
                </div>

                <div className="menu-icons w-1/2 px-12 ml-56  flex">
                    <a href="#home">

                        <p className="text-white  btn1" >HOME</p>
                    </a>

                    <Link to="/allProducts">

                        <p className="text-white  btn1 mx-2" >AllProducts</p>
                    </Link>

                    <Link to="/addProducts">

                        <p className="text-white btn1 mx-2" >SELL</p>
                    </Link>

                </div>
            </div>
        </div >

    )
}
