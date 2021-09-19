import React from 'react'
import Assets from '../assets/bmw-sedan.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function VehicalDetails() {
    const { id } = useParams();

    // const [hospitalsDetails, setHospitalsDetails] = useState([])
    const [users, setUsers] = useState([]);
    useEffect(() => {

        // db.collection('vihicalUser').get().then(resp => {
        //     resp.docs.forEach(data => {
        //         console.log(data.id)
        //         // let currentID = data.id
        //         let appObj = data.docs.map((doc) => ({ ...doc.data([]), id: doc.id }))
        //         // users.push(appObj)
        //         setUsers(appObj)

        //         // users.push(data.data())
        //     })
        // })


        //
        db.collection('vihicalUser').onSnapshot((resp) => {
            console.log(resp, "userss")
            const list = resp.docs.map((doc) => ({ ...doc.data([]), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    return (
        <div>
            <div className="">
                <div>
                    {/* <p>CAR DETAILS</p> */}
                </div>
                {
                    users.map((user, i) => (`:${user.id}` === id ?


                        <div >
                            <div key={i} className=" flex w-3/4 ml-48 mt-24 ">

                                <div className="w-3/4 ">
                                    <img src={Assets} id="slideImage" className=" rounded"></img>

                                </div>
                                <div className="w-1/4 font-normal text-gray-700 ">
                                    <div className="p-3 border rounded border-gray-300 rounded h-64">

                                        <p className="font-bold text-gray-800 text-3xl">Rs. {user.price1}</p>

                                        <p>{user.model1}- {user.kmdvin1}Km</p>
                                        <p>{user.carname1} </p>

                                    </div>
                                    <div className="p-3 rounded border border-gray-300 h-64">
                                        <p className="font-bold m-2 text-gray-800 text-2xl">Seller Information</p>
                                        <div className="m-2 text-sm">

                                            <p>Name: {user.name}</p>

                                            <p>Contect: {user.phonenumber}</p>
                                            <p>Address" {user.addres} </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mx-48 my-8 p-6 border border-gray-300 rounded">
                                <div className=" w-full  p-1 flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p>Year</p>
                                        <p>{user.model1}</p>
                                    </div>
                                    <div className="w-1/6"></div>

                                    <div className="flex w-1/2 justify-between">
                                        <p>
                                            KM's driven</p>
                                        <p>{user.kmdvin1}</p>
                                    </div>
                                </div>
                                <div className=" w-full p-1  flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p>Price</p>
                                        <p>{user.price1}</p>
                                    </div>
                                    <div className="w-1/6"></div>

                                    <div className="flex w-1/2 justify-between">
                                        <p>
                                            Make</p>
                                        <p>{user.make1}</p>
                                    </div>
                                </div>
                                <div className=" w-full p-1  flex">

                                    <div className=" w-1/2 justify-between  flex">
                                        <p>
                                            Model</p>
                                        <p>{user.model1}</p>
                                    </div>
                                    <div className="w-1/6"></div>
                                    <div className="flex w-1/2 justify-between">
                                        <p>Fuel</p>
                                        <p>{user.fuel1}</p>
                                    </div>
                                </div>
                                <div className=" w-full p-1  flex">

                                    <div className=" w-1/2 justify-between  flex">

                                        <p>Registered in</p>

                                        <p>{user.registration1}</p>
                                    </div>
                                    <div className="w-1/6"></div>

                                    <div className="flex w-1/2 justify-between">
                                        <p>Condition</p>
                                        <p>{user.condition1}</p>
                                    </div>
                                </div>



                            </div>


                        </div> : ""
                    ))}


            </div>
        </div >
    )
}

export default VehicalDetails
