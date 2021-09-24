import React from 'react'
import { Link } from 'react-router-dom'

function products() {
    return (
        <div>
            <div id="opening" className=" link-Production bg-banner">
                <div className="text-center  py-12">
                    <p className="text-2xl text-yellow-700 font-bold">Products</p>
                </div>
                <div className="  text-center">
                    <div className="flex py-12 justify-around w-full text-center ">
                        <Link to="/vehicalProducts">

                            <p className="btn-link w-64 ">Vehicles</p>
                        </Link>
                        <Link to="/bikeProducts">

                            <p className="btn-link w-64 ">Bikes</p>
                        </Link>
                        <Link to="/furnitureProducts">

                            <p className="btn-link w-64 ">Furniture</p>
                        </Link>
                        <Link to="/mobileProducts">

                            <p className="btn-link w-64 ">Mobile</p>
                        </Link>

                    </div>
                    <div className="flex py-16 w-full justify-around text-center ">


                    </div>

                </div>
            </div>
        </div>
    )
}

export default products
