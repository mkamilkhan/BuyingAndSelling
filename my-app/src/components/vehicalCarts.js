import React from 'react'
import Assets from '../assets/bmw-sedan.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
function VehicalCarts() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        db.collection('vihicalUser').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    return (
        <div>
            <div className="flex flex-wrap" >
                {
                    users.map((user, i) =>

                        <div key={i} className="w-64 shadow-md m-3">
                            <Link to={`/vehicalDetails/:${user.id}`} exact>
                                <div className="relative flex justify-end w-full ">

                                    <img src={Assets} id="slideImage" className=" rounded"></img>


                                    <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                </div>
                            </Link>
                            <div className="text-xs py-4 p-3 flex-grow rounded font-bold text-gray-700 border shadow-md">



                                <div className=" justify-between flex">
                                    <p>Addres: {user.addres} </p>

                                    <p>Price: {user.price1} </p>

                                </div>

                                {/* <p>Address: {user.addres} </p> */}
                                <p>Car: {user.carname1} </p>
                                <p>Registration: {user.registration1}</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default VehicalCarts
