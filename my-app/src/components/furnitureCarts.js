import React from 'react'
import Assets from '../assets/furni.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react';
import SearcHeader from './searcHeader';

import { Link } from 'react-router-dom';
function FurnitureCarts() {
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        db.collection('furniture').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    const filterNames = (res) => {


        return res.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    };
    return (
        <div className="">
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
                                    <p className=" darks-cols border-b p-12 border-yellow-700" >Furniture</p>
                                </Link>



                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-wrap  " >
                    {
                        users.filter(filterNames).map((user, i) =>

                            <div key={i} className="ml-3 mt-12">
                                <div className=" w-64 ">

                                    <div>
                                        <Link to={`/furnitureDetails/:${user.id}`} exact>
                                            <div className="relative flex justify-end w-full ">


                                                {/* <img src={Assets} id="slideImage" className=" rounded"></img> */}
                                                <img src={user.image} id="slideImage" className=" rounded w-full h-48"></img>

                                                <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                            </div>
                                        </Link>

                                    </div>
                                    <div className="text-xs w-full  py-4 p-1 flex-grow rounded font-bold text-gray-700 border shadow-md">



                                        <div className=" w-full  justify-between ">
                                            <p className="p-1 font-bold">TypeOfFurniure: {user.typeOfFurniure1} </p>
                                            <p className="p-1 font-bold">Addres: {user.addres} </p>


                                            <p className="p-1">TypeOfWood: {user.TypeOfWood} </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FurnitureCarts
