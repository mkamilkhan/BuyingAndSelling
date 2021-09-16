import React from 'react'
import Assets from '../assets/bmw-sedan.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'

export default function Cart() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        db.collection('users').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    // const data = [1, 2, 3, 4, 5, 6, 8, 9, 0, 5, 2, 3, 4, 45]

    return (
        <div>
            <div className="flex flex-wrap" >
                {
                    users.map((user, i) =>

                        <div key={i} className="w-64 shadow-md m-3">
                            <div>

                                <img src={user.image1} id="slideImage" className=" rounded"></img>
                            </div>
                            <div className="text-xs py-4 p-3 flex-grow rounded font-bold text-gray-700 border shadow-md">
                                <div className=" justify-between flex">
                                    <p>Phone: {user.phonenumber}</p>
                                    <p>Model: {user.model1}</p>
                                </div>


                                <div className=" justify-between flex">
                                    <p>Milage: {user.milage1} </p>

                                    <p>Company: {user.bikeName1} </p>

                                </div>

                                <p>Address: {user.addres} </p>
                                <p>Color: {user.bikeName1} </p>
                                <p>Registration: {user.registration1}</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
