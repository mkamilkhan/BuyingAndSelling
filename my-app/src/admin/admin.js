import React from 'react'
import SearcHeader from '../components/searcHeader';
import Logo from '../assets/rr.png';
import { db, storage } from "../firebaseData"
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function Admin() {
    const [users, setUsers] = useState([]);
    const [funiterData, setFuniterData] = useState([]);
    const [carDate, setCarDate] = useState([]);
    const [bikeDate, setBikeDate] = useState([]);
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
    const delet = (id) => {
        db.collection('mobilUsers').doc(id).delete().then((resp) => {
            console.log(resp, "delete")
        })

        db.collection('vihicalUser').doc(id).delete().then((resp) => {
            console.log(resp, "deletessss")
        })
        db.collection('furniture').doc(id).delete().then((resp) => {
            console.log(resp, "delete")
        })

        db.collection('bikeUser').doc(id).delete().then((resp) => {
            console.log(resp, "deletessss")
        })
    }
    const filterNames = (res) => {


        return res.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;

    };
    return (
        <div>
            <div className="bg-gray-100 font-mono">
                <div className=" pt-12 ">
                    <SearcHeader onSearch={setSearchValue} value={searchValue} />
                </div>
                <div className=" text-center text-yellow-600 my-12  text-5xl font-bold pt-12 ">
                    <div className="rounded flex  items-center justify-center bg-white ">
                        <img src={Logo} className="w-32 slideImag"></img>
                        <p className=" mx-6">WellCome to Admin</p>

                    </div>
                </div>
                <div className="m-12 my-16 font-bold ">
                    <p className="text-yellow-600 text-2xl w-56 border-b-4 border-yellow-500 py-2">Mobile Products</p>
                </div>
                <div className="flex flex-wrap justify-center  w-full ">
                    {
                        users.filter(filterNames).map((res, i) => (

                            <div className=" mt-8 m-2 ">
                                <div className="w-64">
                                    {/* <Link to={`/mobileDetails/`}> */}
                                    <div className="  ">
                                        <div className="relative flex w-full  justify-between">
                                            <img src={res.image} id="slideImage" className="h-48 w-full rounded"></img>
                                            <FeatherIcon onClick={() => delet(res.id)} size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="trash-2" color="rgb(226, 98, 13)" />

                                            <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-56 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                    <div className="text-xs py-4 p-1  bg-white flex-grow rounded font-bold text-gray-700 border shadow-md">
                                        <div className=" justify-between flex">
                                            <p>Cpu: {res.model}  </p>
                                            <p>model: {res.name} </p>÷ß
                                            <p>color: {res.color} </p>
                                        </div>
                                        <div className=" justify-between flex">
                                            <p>price:{res.price}   </p>
                                        </div>
                                        <div className=" justify-between flex">
                                            <p> battery:{res.battery}  </p>
                                        </div>
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
                        carDate.filter(filterNames).map((res, i) => (

                            <div className=" mt-8 m-2 ">
                                <div className="w-64">

                                    {/* <Link to={`/vehicalDetails/`} > */}
                                    <div className="  ">
                                        <div className="relative flex w-full  justify-between">
                                            <img src={res.image} id="slideImage" className="h-48 w-full rounded"></img>
                                            <FeatherIcon onClick={() => delet(res.id)} size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="trash-2" color="rgb(226, 98, 13)" />

                                            <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-56 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                        </div>
                                    </div>
                                    {/* </Link> */}

                                    <div className="text-xs py-4 p-1 bg-white  flex-grow rounded font-bold text-gray-700 border shadow-md">



                                        <div className=" justify-between flex">

                                            <p>Model: {res.model} </p>

                                            <p>Fuel: {res.fuel} </p>
                                        </div>
                                        <div className=" justify-between flex">

                                            <p>Car:{res.name}   </p>

                                        </div>
                                        <div className=" justify-between flex">
                                            <p> Registration:{res.registration}  </p>

                                            <p>Price: {res.price}  </p>

                                        </div>

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
                        funiterData.filter(filterNames).map((res, i) => (

                            <div className=" mt-8 m-2 ">
                                <div className="w-64">

                                    {/* <Link to={`/furnitureDetails/`} > */}
                                    <div className="  ">
                                        <div className="relative flex w-full  justify-between">
                                            <img src={res.image} id="slideImage" className="h-48 w-full rounded"></img>
                                            <FeatherIcon onClick={() => delet(res.id)} size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="trash-2" color="rgb(226, 98, 13)" />

                                            <FeatherIcon size="25" className="p-1 mt-1 top-0  mx-56 border rounded-full bg-gray-100 absolute shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                        </div>
                                    </div>
                                    {/* </Link> */}

                                    <div className="text-xs py-4 p-1 bg-white  flex-grow rounded font-bold text-gray-700 border shadow-md">
                                        <div className="text-xs w-full   py-4 p-1  text-gray-700 ">



                                            <div className=" w-full  justify-between ">
                                                <p className="p-1 font-bold">TypeOfFurniure: {res.name} </p>
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
                        bikeDate.filter(filterNames).map((res, i) => (

                            <div className=" mt-8 m-2 ">
                                <div className="w-64">

                                    <div className="  ">
                                        <div className="relative flex w-full  justify-between">
                                            <img src={res.image} id="slideImage" className="h-48 w-full  rounded"></img>
                                            {/* <Link to={`/bikeDetails/`} className="absolute"> */}
                                            <FeatherIcon onClick={() => delet(res.id)} size="25" className="p-1 mt-1 top-0  mx-2 border rounded-full bg-gray-100 absolute shadow-xl " icon="trash-2" color="rgb(226, 98, 13)" />

                                            <div>
                                                <FeatherIcon size="25" className="  p-1 mt-1 top-0 mx-56  border rounded-full bg-gray-100  shadow-xl " icon="file-minus" color="rgb(226, 98, 13)" />
                                            </div>
                                            {/* </Link> */}
                                        </div>
                                    </div>

                                    <div className="text-xs py-4 p-1 bg-white flex-grow rounded font-bold text-gray-700 border shadow-md">
                                        <div className="text-xs  py-4 p-1 text-gray-700  ">
                                            <div className=" justify-between flex">
                                                <p>Model: {res.model}</p>
                                            </div>


                                            <div className=" justify-between flex">

                                                <p>Company: {res.name} </p>

                                            </div>

                                            <p>Color: {res.color} </p>
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
        </div>
    )
}

export default Admin
