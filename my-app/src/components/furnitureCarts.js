import React from 'react'
import Assets from '../assets/bmw-sedan.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
function FurnitureCarts() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        db.collection('furniture').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    return (
        <div className="">
            <div className=" flex w-full  flex-wrap  " >
                {
                    users.map((user, i) =>

                        <div key={i} className="ml-3 mt-12">
                            <div className=" w-64 ">

                                <div>

                                    <img src={Assets} id="slideImage" className=" rounded"></img>
                                </div>
                                <div className="text-xs py-4 p-3 flex-grow rounded font-bold text-gray-700 border shadow-md">
                                    <div className=" justify-between flex">
                                        {/* <p>Phone: {user.phonenumber}</p> */}
                                        {/* <p>name: {user.name}</p> */}
                                    </div>


                                    <div className=" justify-between flex">
                                        <p>typeOfFurniure1: {user.typeOfFurniure1} </p>
                                        <p>addres: {user.addres} </p>


                                    </div>

                                    {/* <p>Address: {user.addres} </p> */}
                                    <p>TypeOfWood: {user.TypeOfWood1} </p>
                                    <p>Textarea: {user.textarea1}</p>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FurnitureCarts
