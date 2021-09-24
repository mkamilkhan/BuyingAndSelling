import React from 'react'
// import { Link, Router, Switch } from 'react-router-dom'
import Furniture from '../assets/furnit.jpeg';
import Mobile from '../assets/mobile.jpeg';
import Bike from '../assets/bike.jpeg';
import Car from '../assets/bmw-sedan.jpeg';
import FeatherIcon from 'feather-icons-react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function addProducts() {
    return (
        <div>

            {/* <Router> */}

            <div className="font-serif bg-gray-100">

                <div>
                    <Link to="/home">

                        <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="50" className=" m-12  absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                    </Link>

                </div>
                <div className=" border rounded-xl shadow-2xl p-48 text-center">
                    <div className="bg-white " >
                        <p className="text-4xl p-12 war-col font-bold">
                            <span className="dark mx-2">
                                ADD
                            </span>
                            YOURS
                            <span className="inf mx-2">PRODUCTS </span>
                        </p>

                    </div>
                    <div className="justify-center flex">

                        <div className=' w-full'>

                            <Link to="/vehicalForm">
                                <div className="dark-col border flex justify-center shadow-xl text-xl  p-12">
                                    <div>

                                        <img className="h-32 w-32 rounded-full   border-b-4 border-t-4 p-1" src={Car}></img>

                                        <p>VEHICLE</p>
                                    </div>
                                </div>

                            </Link>
                        </div>
                        <div className="w-full">

                            <Link to="/bikeForm">
                                <div className="pri-col flex justify-center border shadow-xl text-xl p-12">
                                    <div>
                                        <img className="h-32 w-32 rounded-full   border-b-4 border-t-4 p-1" src={Bike}></img>

                                        <p>BIKE</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div className="w-full">

                            <Link to="/mobileForm">
                                <div className="warning-col flex justify-center border shadow-xl text-xl  p-12">
                                    <div>
                                        <img className="h-32 w-32 rounded-full border-b-4 border-t-4 p-1" src={Mobile}></img>

                                        <p>MOBILE</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="w-full">

                            <Link to="/furnitureForm">
                                <div className=" info-col w-full flex justify-center  border shadow-xl text-xl p-12">
                                    <div>

                                        <img className="h-32 rounded-full border-b-4 border-t-4 p-1" src={Furniture}></img>
                                        <p>FURNITURE</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            {/* </Router> */}
        </div>
    )
}

export default addProducts
