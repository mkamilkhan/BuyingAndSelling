import React from 'react'
// import { Link, Router, Switch } from 'react-router-dom'
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

            <div className="font-serif">
                <div className=" border rounded-xl shadow-2xl m-48 text-center">
                    <div >
                        <p className="text-4xl p-12 war-col font-bold">
                            <span className="dark mx-2">
                                ADD
                            </span>
                            YOURS
                            <span className="inf mx-2">PRODUCTS </span>
                        </p>

                    </div>
                    <div className="justify-center flex">

                        <div className='w-full'>

                            <Link to="/vehicalForm">
                                <div className="dark-col border shadow-xl text-xl  p-12">

                                    <p>Vehicle</p>
                                </div>

                            </Link>
                        </div>
                        <div className="w-full">

                            <Link to="/bikeForm">
                                <div className="pri-col border shadow-xl text-xl p-12">

                                    <p>Bikes</p>

                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="flex justify-center   ">
                        <div className="w-full">

                            <Link to="/mobileForm">
                                <div className="warning-col border shadow-xl text-xl  p-12">
                                    <p>Mobile</p>
                                </div>
                            </Link>
                        </div>
                        <div className="w-full">

                            <Link to="/furnitureForm">
                                <div className=" info-col w-full  border shadow-xl text-xl p-12">

                                    <p>Furniturs</p>
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
