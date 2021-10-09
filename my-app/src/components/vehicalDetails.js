import React from 'react'
import Assets from '../assets/bmw-sedan.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function VehicalDetails() {
    const { id } = useParams();

    const [users, setUsers] = useState([]);
    useEffect(() => {

        db.collection('vihicalUser').onSnapshot((resp) => {
            console.log(resp, "userss")
            const list = resp.docs.map((doc) => ({ ...doc.data([]), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    return (
        <div className="bg-gray-100">
            <div className="">
                <div>
                    <Link to="/vehicalProducts">

                        <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="50" className=" m-12  absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                    </Link>
                </div>
                {
                    users.map((user, i) => (`:${user.id}` === id ?


                        <div >
                            <div key={i} className=" flex w-3/4 ml-48 pt-24 ">

                                <div className="w-3/4 ">
                                    <img src={user.image} id="slideImage" className=" rounded w-full h-full"></img>

                                </div>
                                <div className="w-1/4 bg-white font-normal text-gray-700 ">
                                    <div className="p-3  rounded h-64">

                                        <p className="font-bold text-yellow-600 text-3xl">Rs. {user.price}</p>

                                        <p className="my-1">{user.model}- {user.kmdvin}Km</p>
                                        <p>{user.name} </p>
                                        <p>{user.addres} </p>

                                    </div>
                                    <div className="p-3  h-64">
                                        <p className="font-bold  text-yellow-600 text-2xl">Seller Information</p>
                                        <div className=" my-1 text-sm">

                                            <p>Name: {user.username}</p>

                                            <p className="my-1 ">Contect: {user.phonenumber}</p>
                                            <p>Address" {user.addres} </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mx-48 mt-8 p-6 bg-white rounded">
                                <div className=" w-full  p-4 border flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p className="font-bold text-yellow-600">Year</p>
                                        <p>{user.model}</p>
                                    </div>
                                    <div className="w-1/6"></div>

                                    <div className="flex w-1/2 justify-between">
                                        <p className="font-bold text-yellow-600">
                                            KM's driven</p>
                                        <p>{user.kmdvin}</p>
                                    </div>
                                </div>
                                <div className=" w-full p-4 border flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p className="font-bold text-yellow-600">Price</p>
                                        <p>{user.price}</p>
                                    </div>
                                    <div className="w-1/6"></div>

                                    <div className="flex w-1/2 justify-between">

                                        <p className="font-bold text-yellow-600">
                                            Model</p>
                                        <p>{user.name}</p>
                                    </div>
                                </div>
                                <div className=" w-full p-4 border   flex">

                                    <div className=" w-1/2 justify-between  flex">

                                        <p className="font-bold text-yellow-600">Registered in</p>

                                        <p>{user.registration}</p>

                                    </div>
                                    <div className="w-1/6"></div>
                                    <div className="flex w-1/2 justify-between">
                                        <p className="font-bold text-yellow-600">Fuel</p>
                                        <p>{user.fuel}</p>
                                    </div>
                                </div>
                                <div className=" w-full p-4 border">
                                    <div className="flex  justify-between w-1/2">
                                        <p className="font-bold text-yellow-600">Condition</p>
                                        <p className="mr-16">{user.condition}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-yellow-600 ml-4 m-4">Details:</p>
                                    <p className="w-full  p-3">{user.details}</p>
                                </div>
                            </div>
                        </div> : ""
                    ))}
            </div>
        </div >
    )
}

export default VehicalDetails
