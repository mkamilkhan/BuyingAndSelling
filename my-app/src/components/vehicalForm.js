import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import Assets from '../assets/bike.jpeg';
function vehicalForm() {
    return (
        <div>
            <div className="h-screen">
                <div className="border font-serif m-12 hight-cover flex shadow-2xl  ">
                    <div className="  relative car-img  ">

                        <Link to="/addProducts">

                            <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="30" className="mr-auto m-2 slideImag absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                        </Link>
                        <div className=" mt-56 text-center font-bold ">
                            <p className="text-white border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-700">
                                BUYNING
                            </span> AND <span className="text-red-700">SELLING
                                </span> <span className="inf">PRODUCTION
                                </span> </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-4 text-3xl flex items-center inf font-bold text-center">
                            <p className="border-b rounded-xl   border-8">ADD YOUR CAR PRODUCT
                            </p>
                        </div>
                        <div className="mx-3">

                            <div className=" font-bold p-2  flex">


                                <input className=" text-sm rounded-md border text-gray-600 w-full p-3 font-bold" type="text" placeholder=" UserName:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full flex">


                                <input className="border rounded-md text-sm text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder=" Phone Number:" ></input>

                                <input className="border rounded-md text-sm ml-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder=" Address:"></input>
                            </div>

                            <div className="  font-bold p-2  flex">


                                <input className="border rounded-md text-sm  text-gray-600 w-full p-3 font-bold" type="text" placeholder=" Model:"></input>

                                <input className="border rounded-md text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Engine:"></input>
                            </div>
                            <div className="  font-bold p-2  flex">



                            </div>
                            <div className="  font-bold p-2 w-full  flex">


                                <input className="border rounded-md text-sm  text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="  Car Name:" ></input>
                                {/* <input type="file" className="w-1/2 " /> */}

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border rounded-md text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder=" Capacity:"></input>

                                <input className="border rounded-md text-sm text-gray-600  w-full p-3 font-bold" type="text" placeholder=" Milage:" ></input>
                            </div>
                            <div className="  font-bold p-2  flex">



                            </div>
                            <div className="  font-bold p-2   flex">


                                <input className="border text-sm  rounded-md text-gray-600 w-full p-3 font-bold" type="text" placeholder="  Registration:"></input>

                            </div>
                            <div className="text-center  ">

                                <button className="info-bg p-3 font-bold info-col rounded-md border w-1/2 ">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default vehicalForm
