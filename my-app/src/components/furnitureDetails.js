import React from 'react'
import Assets from '../assets/fur.jpeg';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'

import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
function FurnitureDetails() {
    const { id } = useParams();

    const [users, setUsers] = useState([]);
    useEffect(() => {

        db.collection('furniture').onSnapshot((resp) => {
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
                    <Link to="/furnitureProducts">

                        <FeatherIcon icon="arrow-left" color="gray" size="50" className=" m-12  absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                    </Link>
                </div>
                {
                    users.map((user, i) => (`:${user.id}` === id ?


                        <div >
                            <div key={i} className="  flex w-3/4 ml-48 pt-24 ">

                                <div className="w-3/4 ">
                                    <img src={user.image} id="slideImage" className=" w-full h-full rounded"></img>

                                </div>
                                <div className="w-1/4 font-normal bg-white text-gray-700 ">
                                    <div className="p-3 rounded  rounded h-64">

                                        <p className="font-bold my-2 text-yellow-600 text-2xl">Rs. {user.price}</p>

                                        <p className="my-1 font-bold">{user.typeOfFurniure1}</p>

                                    </div>
                                    <div className="rounded   h-64">
                                        <p className="font-bold m-2 text-yellow-600 text-lg">Seller Information</p>
                                        <div className="m-2 text-sm">

                                            <p className="my-1 font-bold">Name: {user.name}</p>

                                            <p className="my-1 font-bold">Contect: {user.phonenumber}</p>
                                            <p className="font-bold">Address" {user.addres} </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mx-48 my-8 p-6 bg-white border border-gray-300 rounded">
                                <div className=" w-full border text-sm  p-4 flex">

                                    <div className=" w-1/2  justify-between  flex">
                                        <p className="font-bold text-yellow-600">TypeOfFurniure</p>
                                        <p >{user.typeOfFurniure1}</p>
                                    </div>


                                    <div className=" w-1/2 justify-between mx-6 flex">
                                        <p className="font-bold text-yellow-600">TypeOfWood</p>
                                        <p>{user.TypeOfWood}</p>
                                    </div>

                                </div>

                                <div className=" w-full p-4 text-sm border flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p className="font-bold text-yellow-600">
                                            color</p>
                                        <p>{user.color}</p>
                                    </div>
                                    <div className=" w-1/2 justify-between mx-6 flex">

                                        <p className="font-bold text-yellow-600">price</p>

                                        <p>{user.price}</p>
                                    </div>


                                </div>

                                <div className=" w-1/2 mx-4 m-4 text-sm justify-between">
                                    <p className="font-bold my-2 text-yellow-600">FurnitureDetails</p>
                                    <p>{user.textarea}</p>
                                </div>



                            </div>


                        </div> : ""
                    ))}


            </div>
        </div>
    )
}

export default FurnitureDetails
