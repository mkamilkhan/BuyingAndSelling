// import React from 'react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';

import { db, app, } from '../firebaseData'


function BikeForm() {

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [model, setModel] = useState('');
    const [engine, setEngine] = useState('');
    const [bikeName, setBikeName] = useState('');
    const [color, setColor] = useState('');
    const [milage, setMilage] = useState('');
    const [registration, setRegistration] = useState('');
    const [file, setFile] = useState('');




    const save = () => {
        handledata()
    }
    const handledata = () => {

        db.collection("bikeUser").add({
            phonenumber: phone,
            name: username,
            addres: address,
            model1: model,
            engine1: engine,
            bikeName1: bikeName,
            color1: color,
            milage1: milage,
            registration1: registration,
            image1: file

        })
            .then((resp) => {
                console.log("working: ", resp);
            })
            .catch((error) => {
                console.error("Error adding document: " + error);
            });

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


                                <input value={username} onChange={(e) => setUsername(e.target.value)} className=" text-sm border text-gray-600 w-full p-3 font-bold" type="text" placeholder=" UserName:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full flex">


                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border text-sm text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder=" Phone Number:"  ></input>

                                <input value={address} onChange={(e) => setAddress(e.target.value)} className="border text-sm ml-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder=" Address:"></input>
                            </div>

                            <div className="  font-bold p-2  flex">


                                <input value={model} onChange={(e) => setModel(e.target.value)} className="border text-sm  text-gray-600 w-full p-3 font-bold" type="text" placeholder=" Model:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input value={engine} onChange={(e) => setEngine(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Engine:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input value={bikeName} onChange={(e) => setBikeName(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="  Bike Name:" ></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input value={color} onChange={(e) => setColor(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder=" Color:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input value={milage} onChange={(e) => setMilage(e.target.value)} className="border text-sm text-gray-600  w-full p-3 font-bold" type="text" placeholder=" Milage:" ></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input value={registration} onChange={(e) => setRegistration(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="  Registration:"></input>

                            </div>
                            <div className="text-center  ">
                                {/* <Link to="/allProducts"> */}

                                {/* <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="30" className="mr-auto m-2 absolute bg-white rounded-full slideImag shadow-xl p-2 top-0   " /> */}
                                <button className="info-bg shadow-2xl info-col p-3 font-bold rounded-md border w-1/2 " onClick={save}>Save</button>
                                {/* </Link> */}
                                {/* {error} */}
                            </div>
                            <input value={file} onChange={(e) => setFile(e.target.value)} className="p-3 border font-bold rounded-md border w-1/2 " ></input>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BikeForm
