// import React from 'react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
// import Assets from '../assets/bike.jpeg';

import { db, app } from '../firebaseData'




function BikeForm() {

    const [UserName, setUsername] = useState('');

    const save = () => {
        handledata()
    }
    const handledata = () => {



        // db.collection("users").add({

        //     name: UserName,

        // })
        // .then((resp) => {
        //     console.log("working: ", resp);
        // })
        // .catch((error) => {
        //     console.error("Error adding document: " + error);
        // });

    }

    return (
        <div>
            <div className="h-screen">
                <div className="border font-serif m-12 hight-cover flex shadow-2xl  ">
                    <div className="  relative bike-img  ">

                        <Link to="/addProducts">

                            <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="30" className="mr-auto m-2 absolute bg-white rounded-full slideImag shadow-xl p-2 top-0   " />
                        </Link>
                        <div className="mt-56 text-center font-bold ">
                            <p className="text-white  border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-700">
                                BUYNING
                            </span> AND <span className="text-red-700">SELLING
                                </span> <span className="inf">PRODUCTION
                                </span> </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-4 text-3xl  flex items-center inf font-bold text-center">
                            <p className="border-b  rounded-xl border-8">ADD YOUR BIKE PRODUCT
                            </p>
                        </div>
                        <div className="mx-3 ">

                            <div className=" font-bold p-2  flex">


                                <input value={UserName} onChange={(e) => setUsername(e.target.value)} className=" text-sm border text-gray-600 w-full p-3 font-bold" type="text" placeholder=" UserName:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full flex">


                                <input className="border text-sm text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder=" Phone Number:" ></input>

                                <input className="border text-sm ml-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder=" Address:"></input>
                            </div>

                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm  text-gray-600 w-full p-3 font-bold" type="text" placeholder=" Model:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Engine:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="  Bike Name:" ></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder=" Capacity:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600  w-full p-3 font-bold" type="text" placeholder=" Milage:" ></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="  Registration:"></input>

                            </div>
                            <div className="text-center  ">

                                <button className="info-bg shadow-2xl info-col p-3 font-bold rounded-md border w-1/2 " onClick={save}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BikeForm
