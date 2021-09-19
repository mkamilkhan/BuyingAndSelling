import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
// import Assets from '../assets/mobile.jpeg';
import { useState } from 'react'



import { db, app, } from '../firebaseData'

function MobileForm() {


    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [model, setModel] = useState('');
    const [ReleaseDate, setReleaseDate] = useState('');
    const [price, setPrice] = useState('');
    const [Os, setOs] = useState('');
    const [color, setColor] = useState('');
    const [Cpu, setCpu] = useState('');
    const [Company, setCompany] = useState('');
    const [Memory, setMemory] = useState('');





    const save = () => {
        handledata()
    }
    const handledata = () => {

        db.collection("mobilUsers").add({
            phonenumber: phone,
            name: username,
            addres: address,
            Release: ReleaseDate,
            price1: price,
            Os1: Os,
            color1: color,
            Cpu1: Cpu,
            Company1: Company,
            Memory1: Memory,
            // image1: file

        })
            .then((resp) => {
                console.log("working: ", resp);
            })
            .catch((error) => {
                console.error("Error adding document: " + error);
            });

    }
    return (

        <div className="desh">
            <div className="">
                <div className="border hight-cover font-serif m-12 flex shadow-2xl  ">
                    <div className="  relative mobile-img  ">

                        <Link to="/addProducts">

                            <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="30" className="mr-auto m-2 slideImag absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                        </Link>
                        <div className="mt-56 text-center font-bold ">
                            <p className="text-white border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-500">
                                BUYNING
                            </span> AND <span className="text-pink-900 ">SELLING
                                </span> <span className="inf">PRODUCTION
                                </span> </p>
                        </div>
                    </div>
                    <div className="mx-3">
                        <div className="p-4 text-3xl flex items-center inf font-bold text-center">
                            <p className="border-b rounded-xl  border-8">ADD YOUR MOBILE PRODUCT
                            </p>
                        </div>
                        <div className="">

                            <div className=" font-bold p-2 w-full  flex">


                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className=" text-sm border text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="UserName:" ></input>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder="Phone-Number:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full  flex">

                                <input value={address} onChange={(e) => setAddress(e.target.value)} className="border text-sm  text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Address:"></input>

                                <input value={model} onChange={(e) => setModel(e.target.value)} className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Model-Name:"></input>

                            </div>
                            <div className="  font-bold p-2 full  flex">

                                <input value={Company} onChange={(e) => setCompany(e.target.value)} className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Company:"></input>
                                <input value={ReleaseDate} onChange={(e) => setReleaseDate(e.target.value)} className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Release-Date:" ></input>

                            </div>


                            <div className="  font-bold p-2 w-full  flex">


                                <input value={price} onChange={(e) => setPrice(e.target.value)} className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Price:"></input>

                                <input value={Os} onChange={(e) => setOs(e.target.value)} className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="text" placeholder="Os:" ></input>
                            </div>

                            <div className="  font-bold p-2  flex">


                                <input value={Cpu} onChange={(e) => setCpu(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Cpu:"></input>

                            </div>
                            <div className="  font-bold p-2  flex">


                                <input value={Memory} onChange={(e) => setMemory(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Memory:"></input>

                            </div>

                            <div className="  font-bold p-2  flex">



                                <input value={color} onChange={(e) => setColor(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Color:"></input>
                            </div>
                            <div className="text-center  ">

                                <Link to="/mobileProducts">
                                    <button className="info-bg info-col p-3 font-bold rounded-md border w-1/2 " onClick={save}>Save</button>


                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default MobileForm
