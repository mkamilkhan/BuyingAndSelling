import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import Assets from '../assets/bike.jpeg';
import { db, app, } from '../firebaseData'

function VehicalForm() {

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [model, setModel] = useState('');
    const [fuel, setFuel] = useState('');
    const [carname, setCarname] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [make, setMake] = useState('');
    const [registration, setRegistration] = useState('');
    const [condition, setCondition] = useState('');
    const [kmdvin, setKmdvin] = useState('');




    const save = () => {
        handledata()
    }
    const handledata = () => {

        db.collection("vihicalUser").add({
            phonenumber: phone,
            name: username,
            addres: address,
            model1: model,
            fuel1: fuel,
            carname1: carname,
            color1: color,
            make1: make,
            registration1: registration,
            price1: price,
            condition1: condition,
            kmdvin1: kmdvin,

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


                                <input value={username} onChange={(e) => setUsername(e.target.value)} className=" text-sm rounded-md border text-gray-600 w-full p-4 font-bold" type="text" placeholder=" UserName:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full flex">


                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border rounded-md text-sm text-gray-600  w-1/2 p-4 font-bold" type="number" placeholder=" Phone Number:" ></input>

                                <input value={address} onChange={(e) => setAddress(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600 w-1/2 p-4 font-bold" type="text" placeholder=" Address:"></input>
                            </div>

                            <div className="  font-bold p-2  flex">


                                <input value={model} onChange={(e) => setModel(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder=" Model"></input>

                                <input value={fuel} onChange={(e) => setFuel(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600 w-full p-4 font-bold" type="text" placeholder="Fuel"></input>
                            </div>

                            <div className="  font-bold p-2 w-full  flex">


                                <input value={carname} onChange={(e) => setCarname(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-1/2 p-4 font-bold" type="text" placeholder="Car name" ></input>
                                <input value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600 w-1/2 p-4 font-bold" type="text" placeholder="Price" ></input>
                                {/* <input type="file" className="w-1/2 " /> */}

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input value={kmdvin} onChange={(e) => setKmdvin(e.target.value)} className="border rounded-md text-sm text-gray-600 w-full p-4 font-bold" type="text" placeholder="KM's driven:"></input>
                                <input value={make} onChange={(e) => setMake(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600  w-full p-4 font-bold" type="text" placeholder="Make" ></input>
                            </div>

                            <div className="  font-bold p-2   flex">

                                <input value={registration} onChange={(e) => setRegistration(e.target.value)} className="border text-sm  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Registered in  "></input>
                                <input value={condition} onChange={(e) => setCondition(e.target.value)} className="border text-sm ml-1  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Condition"></input>
                            </div>
                            <div className="text-center mt-4 ">
                                <Link to="/vehicalProducts">

                                    <button onClick={save} className="info-bg p-4 font-bold info-col rounded-md border w-1/2 ">Save</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VehicalForm
