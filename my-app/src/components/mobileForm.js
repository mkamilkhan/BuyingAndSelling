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
    const [releaseDate, setReleaseDate] = useState('');
    const [price, setPrice] = useState('');
    const [display, setDisplay] = useState('');
    const [color, setColor] = useState('');
    const [cpu, setCpu] = useState('');
    const [battery, setBattery] = useState('');
    const [details, setDetails] = useState('');
    const [memory, setMemory] = useState('');
    const [image, setImage] = useState('');





    const save = () => {
        handledata()
    }
    const handledata = () => {

        db.collection("mobilUsers").add({
            phonenumber: phone,
            name: username,
            addres: address,
            release: releaseDate,
            price: price,
            display: display,
            color: color,
            cpu: cpu,
            battery: battery,
            memory: memory,
            details: details,

            image: image


        })
            .then((resp) => {
                console.log("working: ", resp);
            })
            .catch((error) => {
                console.error("Error adding document: " + error);
            });

    }
    return (

        <div className="">
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


                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="text" placeholder=" UserName" ></input>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className=" text-sm border text-gray-600 w-1/2 p-3 font-bold" type="number" placeholder="Phone-Number:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full  flex">

                                <input value={address} onChange={(e) => setAddress(e.target.value)} className="border text-sm  text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Address:"></input>
                                <select value={model} onChange={(e) => setModel(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="Memory" >
                                    <option>Model</option>


                                    <option>Samsung Mobile</option>
                                    <option>Huawei Mobile </option>
                                    <option>Honor Mobile</option>
                                    <option>OPPO Mobile</option>
                                    <option>Nokia </option>
                                    <option>Apple iphone </option>
                                    <option>Sony</option>
                                    <option>LG Mobile</option>
                                    <option>Infinix
                                        Note 10 Pro</option>
                                    <option>Oppo
                                        A16</option>
                                    <option>Vivo Y53s</option>
                                    <option>Oppo Reno 6</option>
                                    <option>Samsung
                                        Galaxy Z Flip 3</option>
                                    <option>Samsung
                                        Galaxy Z Fold 3</option>
                                    <option>OnePlus
                                        Nord CE 5G</option>
                                    <option>Xiaomi
                                        Poco X3 GT</option>
                                    <option>Vivo
                                        V21</option>
                                    <option>Samsung
                                        Galaxy A22 6GB</option>
                                    <option>Nokia
                                        X10</option>
                                    <option>Infinix
                                        Note 10 Pro</option>
                                    <option>Tecno
                                        Spark 7</option>
                                    <option>Xiaomi 10</option>
                                    <option>Tecno
                                        Camon 17 Pro</option>
                                    <option>Infinix
                                        Note 10 Pro</option>
                                    <option>Vivo
                                        Y12A</option>
                                    <option>Realme
                                        Narzo 30</option>

                                </select>
                                {/* <input value={} onChange={(e) => (e.target.value)} className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="model"></input> */}

                            </div>
                            <div className="  font-bold p-2 full  flex">
                                <select value={memory} onChange={(e) => setMemory(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="Memory" >
                                    <option>Memory</option>
                                    <option>2GB</option>
                                    <option>4GB</option>
                                    <option>6GB</option>
                                    <option>8GB</option>
                                    <option>16GB</option>
                                    <option>32GB</option>
                                    <option>64GB</option>
                                    <option>128GB</option>
                                    <option>5000 mAh  </option>

                                </select>
                                {/* <input value={memory} onChange={(e) => setMemory(e.target.value)} className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Memory"></input> */}
                                <input value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} className="border text-sm mx-1 text-gray-600 w-full p-3 font-bold" type="date" placeholder="Release-Date:" ></input>

                            </div>


                            <div className="  font-bold p-2 w-full  flex">


                                <input value={price} onChange={(e) => setPrice(e.target.value)} className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Price:"></input>
                                <select value={display} onChange={(e) => setDisplay(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="display" >
                                    <option>Display</option>

                                    <option>6.43 inches (16.33 cm) </option>
                                    <option>
                                        6.6 inches (16.76 cm)</option>
                                    <option>
                                        6.4 inches (16.26 cm) </option>
                                    <option>6.5 inches (16.51 cm) </option>
                                    <option>6.67 inches (16.94 cm) </option>




                                </select>
                                {/* <input value={os} onChange={(e) => setOs(e.target.value)} className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="text" placeholder="Os:" ></input> */}
                            </div>

                            <div className="  font-bold p-2  flex">


                                {/* <input value={battery} onChange={(e) => setBattery(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Battery:"></input> */}

                            </div>
                            <div className="  font-bold p-2  flex">

                                <select value={battery} onChange={(e) => setBattery(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="battery" >
                                    <option>battery</option>


                                    <option>4000 mAh  </option>
                                    <option>5000 mAh  </option>
                                    <option>5160 mAh  </option>
                                    <option>7000 mAh  </option>

                                </select>
                                {/* <input value={} onChange={(e) => (e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Cpu:"></input> */}
                                <select value={cpu} onChange={(e) => setCpu(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="cpu" >
                                    <option>Processor</option>


                                    <option>Octa core (2 GHz, Dual C</option>
                                    <option>Octa core (2.05 GHz, Dual </option>
                                    <option>Octa core (2.96 GHz, Singl</option>
                                    <option>Octa core (2.2 GHz, Dual C</option>
                                    <option>Octa core (2.3 GHz, Quad </option>
                                    <option>Octa core (2.4 GHz, Quad </option>

                                </select>
                                <select value={color} onChange={(e) => setColor(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="color" >
                                    <option>Color</option>


                                    <option>Twilight.</option>
                                    <option>Coral Pink </option>
                                    <option>Ruby Red gradient</option>
                                    <option>Rose Gold</option>
                                    <option>Lilac Purple </option>
                                    <option>Phantom Green and Phantom Blue </option>
                                    <option>Nebula Purple</option>
                                    <option>Ocean Depths</option>

                                </select>
                            </div>

                            <div className="  font-bold p-2  flex">
                                <textarea value={details} onChange={(e) => setDetails(e.target.value)} className="border text-sm  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Details " className="border w-full p-2 text-sm h-32"></textarea>
                            </div>
                            <div className="text-center  ">

                                <Link to="/mobileProducts">
                                    <button className="info-bg info-col p-3 font-bold rounded-md border w-1/2 " onClick={save}>Save</button>


                                </Link>
                                <input onChange={(e) => setImage(e.target.value)} value={image} className="border border-yellow-600 rounded p-4" placeholder="Image"></input>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default MobileForm
