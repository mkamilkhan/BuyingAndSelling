import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import Assets from '../assets/bike.jpeg';
function mobileForm() {
    return (

        <div className="desh">
            <div className="">
                <div className="border hight-cover font-serif m-12 flex shadow-2xl  ">
                    <div className="  relative mobile-img  ">

                        <Link to="/addProducts">

                            <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="30" className="mr-auto m-2 slideImag absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                        </Link>
                        <div className="mt-56 text-center font-bold ">
                            <p className="text-white border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-500">
                                BUYNING
                            </span> AND <span className="text-pink-900 ">SELLING
                                </span> <span className="inf">PRODUCTION
                                </span> </p>
                        </div>
                    </div>
                    <div className="mx-3">
                        <div className="p-4 text-3xl flex items-center inf font-bold text-center">
                            <p className="border-b rounded-xl  border-8">ADD YOUR MOBILE PRODUCT
                            </p>
                        </div>
                        <div className="">

                            <div className=" font-bold p-2 w-full  flex">


                                <input className=" text-sm border text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="UserName:" ></input>
                                <input className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder="Phone-Number:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full  flex">

                                <input className="border text-sm  text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Address:"></input>

                                <input className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Model-Name:"></input>

                            </div>
                            <div className="  font-bold p-2 full  flex">

                                <input className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Company:"></input>
                                <input className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Release-Date:" ></input>

                            </div>


                            <div className="  font-bold p-2 w-full  flex">


                                <input className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Price:"></input>

                                <input className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="text" placeholder="Os:" ></input>
                            </div>

                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Cpu:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Memory:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Sensor:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Color:"></input>

                            </div>
                            <div className="text-center  ">

                                <button className="info-bg info-col p-3 font-bold rounded-md border w-1/2 ">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default mobileForm
