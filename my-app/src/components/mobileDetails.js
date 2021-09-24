import React from 'react'
import Assets from '../assets/mobile.jpeg';
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
function MobileDetails() {
    const { id } = useParams();

    const [users, setUsers] = useState([]);
    useEffect(() => {

        db.collection('mobilUsers').onSnapshot((resp) => {
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
                    <Link to="/mobileProducts">

                        <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="50" className=" m-12  absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                    </Link>
                </div>
                {
                    users.map((user, i) => (`:${user.id}` === id ?


                        <div >
                            <div key={i} className=" flex w-3/4 ml-48 pt-24 ">

                                <div className="w-3/4  ">
                                    <img src={user.image} id="slideImage" className=" rounded w-full h-full"></img>

                                </div>
                                <div className="w-1/4 font-normal bg-white text-gray-700 ">
                                    <div className="p-3  rounded h-64">

                                        <p className="font-bold my-2 text-yellow-600 text-3xl">Rs. {user.price}</p>

                                        <p className="my-1">{user.model}</p>
                                        <p>{user.phonenumber} </p>

                                    </div>
                                    <div className="rounded bg-white h-64">
                                        <p className="font-bold m-2 text-yellow-600 text-2xl">Seller Information</p>
                                        <div className="m-2 text-sm">

                                            <p className="my-1">Name: {user.name}</p>

                                            <p className="my-1">Contect: {user.phonenumber}</p>
                                            <p>Address" {user.addres} </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mx-48 my-8 p-6 bg-white rounded">
                                <div className=" w-full border p-4 flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p className="font-bold text-yellow-600">Release</p>
                                        <p>{user.release}</p>
                                    </div>


                                    <div className=" w-1/2  justify-between  flex">
                                        <p className="font-bold mx-6  text-yellow-600">Price</p>
                                        <p>{user.price}</p>
                                    </div>

                                </div>

                                <div className=" w-full p-4 border flex">

                                    <div className=" w-1/2 justify-between  xs flex">
                                        <p className="font-bold text-yellow-600">
                                            Battery</p>
                                        <p>{user.battery}</p>
                                    </div>


                                </div>
                                <div className=" w-full p-4 border flex">

                                    <div className=" w-1/2 justify-between  flex">

                                        <p className="font-bold text-yellow-600">Memory</p>

                                        <p>{user.memory}</p>
                                    </div>


                                    <div className="flex w-1/2 justify-between ">
                                        <p className="font-bold text-yellow-600 mx-6">Display</p>
                                        <p>{user.display}</p>
                                    </div>
                                </div>
                                <div className=" mx-3 m-3">
                                    <p className="font-bold text-yellow-600">Details</p>
                                    <p className="w-full p-3">{user.details}</p>
                                </div>



                            </div>


                        </div> : ""
                    ))}


            </div>
        </div>
    )
}

export default MobileDetails
