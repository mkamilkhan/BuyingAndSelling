// import React from 'react'
import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import { db, app, } from '../firebaseData'


function BikeForm() {

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [model, setModel] = useState('');
    const [engine, setEngine] = useState('');
    const [productName, setProductName] = useState('');
    const [color, setColor] = useState('');
    const [registration, setRegistration] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [imageUrl, setImageUrl] = useState();






    const save = () => {
        handledata()
    }
    const handledata = () => {

        db.collection("bikeUser").add({
            phonenumber: phone,
            name: username,
            addres: address,
            model: model,
            engine: engine,
            productName: productName,
            color: color,
            registration: registration,
            condition: condition,
            price: price,
            details: details,
            image: imageUrl,


        })
            .then((resp) => {
                console.log("working: ", resp);
            })
            .catch((error) => {
                console.error("Error adding document: " + error);
            });
    }

    const onchange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref("images").child(file.name)
        await storageRef.put(file)
        storageRef.getDownloadURL().then((url) => {
            setImageUrl(url)
        })
    }
    return (
        <div>
            <div className="h-screen">
                <div className="border font-serif m-12 hight-cover flex shadow-2xl  ">
                    <div className="  relative bike-img  ">

                        <Link to="/addProducts">

                            <FeatherIcon icon="arrow-left" color="orange" size="30" className="mr-auto m-2 absolute bg-white rounded-full slideImag shadow-xl p-2 top-0   " />
                        </Link>
                        <div className="mt-56 text-center font-bold ">
                            <p className="text-white  border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-700">
                                BUYNING
                            </span> AND <span className="text-red-700">SELLING
                                </span> <span className="inf">PRODUCTION
                                </span> </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-4 text-3xl  flex items-center inf font-bold text-center">
                            <p className="border-b  rounded-xl border-8">ADD YOUR BIKE PRODUCT
                            </p>
                        </div>
                        <div className="mx-3 ">

                            <div className=" font-bold p-2  flex">


                                <input value={username} onChange={(e) => setUsername(e.target.value)} className=" text-sm border text-gray-600 w-full p-3 font-bold" type="text" placeholder=" UserName:" ></input>
                            </div>
                            <div className="  font-bold p-2 w-full flex">


                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border text-sm text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder=" Phone Number:"  ></input>

                                <input value={address} onChange={(e) => setAddress(e.target.value)} className="border text-sm ml-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder=" Address:"></input>
                            </div>

                            <div className="  font-bold p-2  flex">


                                <select value={condition} onChange={(e) => setCondition(e.target.value)} className="border text-sm ml-1  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Condition">
                                    <option>condition</option>
                                    <option>Used</option>
                                    <option>New</option>

                                </select>
                                {/* <input value={condition} onChange={(e) => setCondition(e.target.value)} className="border ml-1 text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="  Condition"></input> */}

                                <select value={productName} onChange={(e) => setProductName(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="Car name" >
                                    <option>bikeName</option>
                                    <option>Honda CB 125F</option>
                                    <option>Honda CD 70</option>
                                    <option>Benelli TNT 150i </option>
                                    <option>Honda CG 125</option>
                                    <option>Unique</option>
                                    <option> Hero</option>
                                    <option>Suzuki</option>
                                    <option>RIVO</option>

                                </select>

                            </div>
                            <div className="  font-bold p-2  flex">
                                <select value={engine} onChange={(e) => setEngine(e.target.value)} className="border text-sm ml-1  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Condition">
                                    <option>Engine</option>
                                    <option>70</option>
                                    <option>100</option>
                                    <option>125</option>
                                    <option>150</option>
                                    <option>200</option>

                                </select>

                                {/* <input value={engine} onChange={(e) => setEngine(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="Engine:"></input> */}
                                <input value={price} onChange={(e) => setPrice(e.target.value)} className="border text-sm ml-1 text-gray-600 w-full p-3 font-bold" type="text" placeholder="Price"></input>

                            </div>



                            <div className="  font-bold p-2  flex">

                                <select value={registration} onChange={(e) => setRegistration(e.target.value)} className="border text-sm  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Registered in ">
                                    <option>registration</option>
                                    <option>Abbottabad</option>
                                    <option>Swabi</option>
                                    <option>Swat</option>
                                    <option>Malakand</option>
                                    <option>Kohat</option>
                                    <option>Khyber</option>
                                    <option>Haripur	</option>
                                    <option> Buner</option>
                                    <option>Attock</option>
                                    <option>Bahawalpur</option>
                                    <option>Faisalabad</option>
                                    <option>Multan</option>
                                    <option>Okara</option>
                                    <option>Rawalpindi</option>
                                    <option>Sialkot</option>
                                    <option>Texila</option>
                                    <option>Peshawar</option>
                                    <option>Nowshera</option>
                                    <option>Jahangira</option>
                                    <option>Mardan</option>
                                    <option>Karak</option>
                                    <option>Kalam</option>
                                    <option>Peshawar</option>


                                </select>
                                {/* <input value={registration} onChange={(e) => setRegistration(e.target.value)} className="border text-sm text-gray-600 w-full p-3 font-bold" type="text" placeholder="  Registration:"></input> */}

                            </div>
                            <div className="  font-bold p-2  flex">
                                <textarea value={details} onChange={(e) => setDetails(e.target.value)} className="border text-sm  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Details " className="border w-full p-2 text-sm h-32"></textarea>
                            </div>
                            <div className="text-center my-2 ">

                                <Link to="/bikeProducts">

                                    <button className="info-bg shadow-2xl info-col p-3 font-bold rounded-md border w-1/2 " onClick={save}>Save</button>
                                </Link>
                                {/* {error} */}
                                {/* <input onChange={(e) => setImage(e.target.value)} value={image} className="border border-yellow-600 rounded p-3 bg-gray-200" placeholder="Image"></input> */}
                                <input type="file" onChange={onchange} className="border w-1/2 border-yellow-600 rounded p-3 bg-gray-200" placeholder="Image"></input>

                            </div>
                            {/* <input value={file} onChange={(e) => setFile(e.target.value)} className="p-3 border font-bold rounded-md border w-1/2 " ></input> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BikeForm
