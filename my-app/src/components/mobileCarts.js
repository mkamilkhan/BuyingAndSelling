import React from 'react'
import Assets from '../assets/mobile.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
function MobileCarts() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        db.collection('mobilUsers').onSnapshot((resp) => {

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
                            <div>

                                <img src={Assets} id="slideImage" className=" rounded"></img>
                            </div>
                            <div className="text-xs py-4 p-3 flex-grow rounded font-bold text-gray-700 border shadow-md">
                                <div className=" justify-between flex">
                                    {/* <p>Phone: {user.phonenumber}</p> */}
                                    {/* <p>Model: {user.model1}</p> */}
                                </div>


                                <div className=" justify-between flex">
                                    {/* <p>model: {user.model} </p> */}

                                    <p>ReleaseDate: {user.Release} </p>

                                    <p>color: {user.price1} </p>
                                </div>
                                <div className=" justify-between flex">

                                    <p>price: {user.Os1} </p>

                                </div>
                                <div className=" justify-between flex">
                                    <p>Os: {user.color1} </p>

                                    <p>Cpu: {user.Cpu1} </p>

                                </div>

                                {/* <p>Address: {user.addres} </p> */}
                                <p>Company: {user.Company1} </p>
                                <p>Memory: {user.Memory1}</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MobileCarts
