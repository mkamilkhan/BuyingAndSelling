import React from 'react'
import Assets from '../assets/bike.jpeg';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
function BikeDetails() {
    const { id } = useParams();

    const [users, setUsers] = useState([]);
    useEffect(() => {

        db.collection('bikeUser').onSnapshot((resp) => {
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
                    <Link to="/bikeProducts">

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
                                <div className="w-1/4 font-normal bg-white text-gray-700 ">
                                    <div className="p-3  rounded h-64">

                                        <p className="font-bold my-2 text-yellow-600 text-3xl">Rs. {user.price}</p>

                                        <p className="font-bold">{user.name} </p>

                                    </div>
                                    <div className="rounded  h-64">
                                        <p className="font-bold m-2 text-yellow-600 text-2xl">Seller Information</p>
                                        <div className="m-2 text-sm">

                                            <p className="my-1 font-bold ">Name: {user.username}</p>

                                            <p className="my-1 font-bold">Contect: {user.phonenumber}</p>
                                            <p className="font-bold">Address" {user.addres} </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mx-48 mt-8 bg-white p-6 border border-gray-300 rounded">
                                <div className=" w-full border  p-4 flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p className="font-bold text-yellow-600">Condition</p>
                                        <p>{user.condition}</p>
                                    </div>


                                    <div className=" w-1/2 justify-between  flex">
                                        <p className="font-bold mx-8 text-yellow-600" >Price</p>
                                        <p>{user.price}</p>
                                    </div>

                                </div>

                                <div className=" w-full p-4 border flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p className="font-bold text-yellow-600">
                                            BIKE</p>
                                        <p>{user.name}</p>
                                    </div>

                                    <div className=" w-1/2  justify-between  flex">

                                        <p className="font-bold mx-8 text-yellow-600">Registered in</p>

                                        <p>{user.registration}</p>
                                    </div>

                                </div>

                                <div className=" mx-4 m-3">
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

export default BikeDetails
