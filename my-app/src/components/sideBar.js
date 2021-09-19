import React from 'react'
import { Link } from 'react-router-dom'


function SideBar() {
    return (
        <div className=" pt-32 shadow-lg flex ">
            <div className=" w-64 fixed left-bar ">
                <div className=" h-screen ">
                    <div className="  justify-around w-full  ">

                        <Link to="/addProducts">
                            <p className="p-12">AllProducts</p>
                        </Link>

                        <Link to="/vehicalProducts">

                            <p className="p-12">Vehicles</p>
                        </Link>

                        <Link to="/bikeProducts">
                            <p className=" p-12 ">Bikes</p>
                        </Link>
                    </div>
                    <div className="  w-full justify-around  ">
                        <Link to="/mobileProducts">
                            <p className="  p-12 ">Mobile</p>
                        </Link>
                    </div>
                    <div className="   w-full justify-around  ">
                        <Link to="/furnitureProducts">
                            <p className="  p-12" >Furniture</p>
                        </Link>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
