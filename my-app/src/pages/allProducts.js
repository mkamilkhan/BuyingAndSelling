import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Car from '../assets/caro.jpeg';
import Furniture from '../assets/furni.jpeg';
import Bike from '../assets/bike.jpeg';
import Assets from '../assets/mobi.jpeg';
import SearcHeader from '../components/searcHeader';

import { db, storage } from "../firebaseData"
import FeatherIcon from 'feather-icons-react';

import { Link } from 'react-router-dom'
import Cart from '../components/cart';
import BikeProducts from './bikeProducts';
import { useState, useEffect } from 'react'

function AllProducts() {
    const [users, setUsers] = useState([]);
    const [funiterData, setFuniterData] = useState([]);
    const [carDate, setCarDate] = useState([]);
    const [bikeDate, setBikeDate] = useState([]);
    // const [mobileDate, setMobileDate] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        db.collection('mobilUsers').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setUsers(list);
            console.log(list);
        })
        db.collection('vihicalUser').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setCarDate(list);
            console.log(list);
        })
        db.collection('furniture').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setFuniterData(list);
            console.log(list);
        })
        db.collection('bikeUser').onSnapshot((resp) => {

            const list = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setBikeDate(list);
            console.log(list);
        })
    }, []);
    // const filterNames = (res) => {


    //     // return res.price1.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    // };
    return (
        <div className="bg-gray-100">
            <div className=" pt-12 ">
                <div>
                    <Link to="/home">

                        <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="50" className=" m-12  absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                    </Link>
                </div>

                <SearcHeader onSearch={setSearchValue} value={searchValue} />
            </div>

            <div className="m-12 font-bold ">
                <p className="text-yellow-600 text-2xl w-56 border-b-4 border-yellow-500 py-2">Mobile Products</p>

            </div>
            <div className="flex flex-wrap justify-center  w-full ">
                {
                    users.map((res, i) => (

                        <div className=" mt-8 m-2 ">
                            <div className="w-64">

                                <Link to={`/mobileDetails/:${res.id}`} exact>
                                    <div className="relative flex justify-end w-full ">


                                        <img src={res.image} id="slideImage" className="h-48 w-full rounded"></img>

                                        <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                    </div>
                                </Link>

                                <div className="text-xs py-4 p-1  bg-white flex-grow rounded font-bold text-gray-700 border shadow-md">



                                    <div className=" justify-between flex">


                                        <p>ReleaseDate: {res.release} </p>

                                        <p>color: {res.color} </p>
                                    </div>
                                    <div className=" justify-between flex">

                                        <p>price:{res.price}   </p>

                                    </div>
                                    <div className=" justify-between flex">
                                        <p> battery:{res.battery}  </p>

                                        <p>Cpu: {res.cpu}  </p>

                                    </div>

                                    {/* <p>Address: {user.addres} </p> */}
                                    {/* <p>Company: {user.Company1} </p> */}
                                    <p>Memory:{res.memory} </p>

                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            {/* 2nd section */}
            <div className="m-12 font-bold">
                <p className="text-yellow-600 text-2xl  w-56 border-b-4 border-yellow-500 py-2">Vehical Products</p>

            </div>
            <div className="flex flex-wrap justify-center  w-full ">
                {
                    carDate.map((res, i) => (

                        <div className=" mt-8 m-2 ">
                            <div className="w-64">

                                <Link to={`/vehicalDetails/:${res.id}`} exact>
                                    <div className="relative flex justify-end w-full ">


                                        <img src={res.image} id="slideImage" className="h-48 w-full rounded"></img>

                                        <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                    </div>
                                </Link>

                                <div className="text-xs py-4 p-1 bg-white  flex-grow rounded font-bold text-gray-700 border shadow-md">
                                    <div className=" justify-between flex">
                                        {/* <p>Phone: {user.phonenumber}</p> */}
                                        {/* <p>Model: {user.model1}</p> */}
                                    </div>


                                    <div className=" justify-between flex">
                                        {/* <p>model: {user.model} </p> */}

                                        <p>Model: {res.model} </p>

                                        <p>Fuel: {res.fuel} </p>
                                    </div>
                                    <div className=" justify-between flex">

                                        <p>Car:{res.carname}   </p>

                                    </div>
                                    <div className=" justify-between flex">
                                        <p> Registration:{res.registration}  </p>

                                        <p>Price: {res.price}  </p>

                                    </div>

                                    {/* <p>Address: {user.addres} </p> */}
                                    {/* <p>Company: {user.Company1} </p> */}
                                    <p>Memory:{res.memory} </p>

                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            {/* 3rd section */}
            <div className="m-12 font-bold">
                <p className="text-yellow-600 text-2xl  w-56 border-b-4 border-yellow-500 py-2">Furniture Products</p>

            </div>
            <div className="flex flex-wrap justify-center  w-full ">
                {
                    funiterData.map((res, i) => (

                        <div className=" mt-8 m-2 ">
                            <div className="w-64">

                                <Link to={`/furnitureDetails/:${res.id}`} exact>
                                    <div className="relative flex justify-end w-full ">


                                        <img src={res.image} id="slideImage" className="h-48 w-full rounded"></img>

                                        <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                    </div>
                                </Link>

                                <div className="text-xs py-4 p-1 bg-white  flex-grow rounded font-bold text-gray-700 border shadow-md">
                                    <div className="text-xs w-full   py-4 p-1  text-gray-700 ">



                                        <div className=" w-full  justify-between ">
                                            <p className="p-1 font-bold">TypeOfFurniure: {res.typeOfFurniure1} </p>
                                            <p className="p-1 font-bold">Addres: {res.addres} </p>


                                            <p className="p-1">TypeOfWood: {res.TypeOfWood} </p>
                                        </div>

                                    </div>







                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            {/* 4rd section */}
            <div className="m-12 font-bold">
                <p className="text-yellow-600  w-56 border-b-4 border-yellow-500 py-2 text-2xl">Bike Products</p>

            </div>
            <div className="flex flex-wrap justify-center  w-full ">
                {
                    bikeDate.map((res, i) => (

                        <div className=" mt-8 m-2 ">
                            <div className="w-64">

                                <Link to={`/bikeDetails/:${res.id}`} exact>
                                    <div className="relative flex justify-end w-full ">


                                        <img src={res.image} id="slideImage" className=" h-48 w-full rounded"></img>

                                        <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                    </div>
                                </Link>

                                <div className="text-xs py-4 p-1 bg-white flex-grow rounded font-bold text-gray-700 border shadow-md">
                                    <div className="text-xs  py-4 p-1 text-gray-700  ">
                                        <div className=" justify-between flex">
                                            {/* <p>Phone: {user.phonenumber}</p> */}
                                            <p>Model: {res.model}</p>
                                        </div>


                                        <div className=" justify-between flex">
                                            {/* <p>Milage: {res.milage1} </p> */}

                                            <p>Company: {res.bikeName} </p>

                                        </div>

                                        {/* <p>Address: {res.addres} </p> */}
                                        <p>Color: {res.bikeName} </p>
                                        <p>Registration: {res.registration}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
        // </div >
    )
}

export default AllProducts
