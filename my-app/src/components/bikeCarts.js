import React from 'react'
import Assets from '../assets/bike.jpeg';
import { db, storage } from "../firebaseData"
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SearcHeader from './searcHeader';

import { useState, useEffect } from 'react'

function BikeCarts() {
    const [searchValue, setSearchValue] = useState("");
    const [users, setUsers] = useState([]);
    useEffect(() => {
        db.collection('bikeUser').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    const filterNames = (res) => {


        return res.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    };
    return (
        <div>
            <div className=" desh w-full dark-cols p-6">
                <SearcHeader className="desh" onSearch={setSearchValue} value={searchValue} />

            </div>
            <div className="flex">
                <div>
                    <div className=" w-64 mt-6 ">
                        <div className="">
                            <div className="justify-around   ">

                                <Link to="/addProducts">
                                    <p className="p-12 darks-cols border-b border-gray-600">AllProducts</p>
                                </Link>

                                <Link to="/vehicalProducts">

                                    <p className="p-12 darks-cols border-b border-gray-600">Vehicles</p>
                                </Link>

                                <Link to="/bikeProducts">
                                    <p className=" darks-cols border-b p-12 border-gray-600 ">Bikes</p>
                                </Link>
                            </div>
                            <div className="  w-full justify-around  ">
                                <Link to="/mobileProducts">
                                    <p className=" darks-cols border-b p-12 border-gray-600 ">Mobile</p>
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

                <div className="flex  flex-wrap" >
                    {
                        users.filter(filterNames).map((user, i) =>

                            <div key={i} className="w-64 m-3  shadow-md ">

                                <Link to={`/bikeDetails/:${user.id}`} exact>
                                    <div className="relative flex justify-end w-full ">


                                        <img src={Assets} id="slideImage" className=" rounded"></img>

                                        <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                    </div>
                                </Link>
                                <div>

                                </div>
                                <div className="text-xs py-4 p-3 flex-grow rounded font-bold text-gray-700 border shadow-md">
                                    <div className=" justify-between flex">
                                        {/* <p>Phone: {user.phonenumber}</p> */}
                                        <p>Model: {user.model1}</p>
                                    </div>


                                    <div className=" justify-between flex">
                                        <p>Milage: {user.milage1} </p>

                                        <p>Company: {user.bikeName1} </p>

                                    </div>

                                    {/* <p>Address: {user.addres} </p> */}
                                    <p>Color: {user.bikeName1} </p>
                                    <p>Registration: {user.registration1}</p>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BikeCarts
