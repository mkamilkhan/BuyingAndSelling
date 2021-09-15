import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import Assets from '../assets/bike.jpeg';
// import { db } from "../fireData"

function furnitureForm() {
    return (
        <div>
            <div className="desh">
                <div className="">
                    <div className="border hight-cover font-serif m-12 flex shadow-2xl  ">
                        <div className="  relative furniture-img  ">

                            <Link to="/addProducts">

                                <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="30" className="mr-auto m-2 slideImag absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                            </Link>
                            <div className="mt-56 text-center font-bold ">
                                <p className="text-white border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-500">
                                    BUYNING
                                </span> AND <span className="text-green-200 ">SELLING
                                    </span> <span className="inf">PRODUCTION
                                    </span> </p>
                            </div>
                        </div>
                        <div className="mx-3">
                            <div className="p-4 text-3xl flex items-center inf font-bold text-center">
                                <p className="border-b rounded-xl border-8">ADD YOUR MOBILE PRODUCT
                                </p>
                            </div>
                            <div className="">

                                <div className=" font-bold p-2 w-full  flex">


                                    <input className=" text-sm border text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="UserName:" ></input>
                                    <input className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder="Phone-Number:" ></input>
                                </div>
                                <div className="  font-bold p-2 w-full  flex">

                                    <input className="border text-sm  text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Address:"></input>

                                    <input className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Type-Of-Furniture:"></input>

                                </div>
                                <div className="  font-bold p-2 full  flex">

                                    <input className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Company:"></input>
                                    <input className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Color:" ></input>

                                </div>


                                <div className="  font-bold p-2 w-full  flex">


                                    <input className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Price:"></input>

                                    {/* <input className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="text" placeholder="Os:" ></input> */}
                                </div>

                                <div className="w-full h-56">

                                    <textarea className="border border-gray-300 rounded-md w-full h-48 text-sm text-gray-800 p-2" id="story" name="story" placeholder="Funitures-Details "
                                    >

                                    </textarea>
                                </div>
                                <div className="text-center  ">

                                    <button className="info-bg info-col p-3 font-bold rounded-md border w-1/2 ">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default furnitureForm
