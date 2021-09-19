import React from 'react'
import Assets from '../assets/furni.jpeg';
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



                                    <div className=" justify-between ">
                                        <p className="p-1">TypeOfFurniure: {user.typeOfFurniure1} </p>
                                        <p className="p-1">Addres: {user.addres} </p>


                                        <p className="p-1">TypeOfWood: {user.TypeOfWood1} </p>
                                    </div>

                                    {/* <p>Address: {user.addres} </p> */}
                                    {/* <p>Textarea: {user.textarea1}</p> */}

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
