import React from 'react'
import Assets from '../assets/bmw-sedan.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react';
import SearcHeader from './searcHeader';

import { Link } from 'react-router-dom';
function VehicalCarts() {
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        db.collection('vihicalUser').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    const filterNames = (res) => {


        return res.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    };
    return (
        <div className=" w-full">
            <div className="  w-full  p-6">
                <div>
                    <Link to="/home">

                        <FeatherIcon Link to="/login" icon="arrow-left" color="orange" size="30" className=" m-4 absolute bg-white rounded-full shadow-xl p-1    " />
                    </Link>
                </div>
                <SearcHeader className="" onSearch={setSearchValue} value={searchValue} />

            </div>
            <div className="flex">
                <div>
                    <div className=" w-64 mt-6 ">
                        <div className="">
                            <div className="justify-around   ">

                                <Link to="/addProducts">
                                    <p className="p-12 darks-cols border-b border-yellow-700">Add Products</p>
                                </Link>

                                <Link to="/vehicalProducts">

                                    <p className="p-12 darks-cols border-b border-yellow-700">Vehicles</p>
                                </Link>

                                <Link to="/bikeProducts">
                                    <p className=" darks-cols border-b p-12 border-yellow-700 ">Bikes</p>
                                </Link>
                            </div>
                            <div className="  w-full justify-around  ">
                                <Link to="/mobileProducts">
                                    <p className=" darks-cols border-b p-12 border-yellow-700 ">Mobile</p>
                                </Link>
                            </div>
                            <div className="   w-full justify-around  ">
                                <Link to="/furnitureProducts">
                                    <p className=" darks-cols border-b p-12 border-gray-600" >Furniture</p>
                                </Link>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap" >
                    {
                        users.filter(filterNames).map((user, i) =>

                            <div key={i} className="w-64 m-3">
                                <Link to={`/vehicalDetails/:${user.id}`} exact>
                                    <div className="relative flex justify-end w-full ">

                                        <img src={user.image} id="slideImage" className=" rounded w-full h-48"></img>


                                        <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                    </div>
                                </Link>
                                <div className="text-xs py-4 p-3  flex-grow rounded font-bold text-gray-700 border shadow-md">



                                    <div className=" justify-between flex">
                                        <p>Addres: {user.addres} </p>

                                        <p>Price: {user.price} </p>

                                    </div>

                                    {/* <p>Address: {user.addres} </p> */}
                                    <p>Car: {user.carname} </p>
                                    <p >Registration: {user.registration}</p>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default VehicalCarts
