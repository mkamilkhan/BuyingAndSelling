import React from 'react'
import Assets from '../assets/mobile.jpeg';
import { db, storage } from "../firebaseData"
import { useState, useEffect } from 'react'
import SearcHeader from './searcHeader';
// import SideBar from './sideBar';
import { Link } from 'react-router-dom'

function MobileCarts() {
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        db.collection('mobilUsers').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
    }, []);
    const filterNames = (res) => {


        return res.price1.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    };
    return (
        <div className="w-full">
            <div className=" desh w-full dark-cols p-6">
                <SearcHeader className="desh" onSearch={setSearchValue} value={searchValue} />

            </div>
            <div className="flex " >
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

                <div className="flex flex-wrap">

                    {
                        users.filter(filterNames).map((user, i) =>

                            <div key={i} className=" m-3">
                                <div className="w-64">
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
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileCarts
