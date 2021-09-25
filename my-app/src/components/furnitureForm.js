import React from 'react'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
import Assets from '../assets/bike.jpeg';
import { useState } from 'react'
import { db, app, } from '../firebaseData'

// import { db } from "../fireData"

function FurnitureForm() {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [typeOfFurniure, setTypeOfFurniure] = useState('');
    const [TypeOfWood, setTypeOfWood] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [textarea, setTextarea] = useState('');
    const [image, setImage] = useState('');





    const save = () => {
        handledata()
    }
    const handledata = () => {

        db.collection("furniture").add({
            phonenumber: phone,
            name: username,
            addres: address,
            typeOfFurniure1: typeOfFurniure,
            TypeOfWood: TypeOfWood,
            color: color,
            price: price,
            textarea: textarea,
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
        <div>
            <div className="desh">
                <div className="">
                    <div className="border hight-cover font-serif m-12 flex shadow-2xl  ">
                        <div className="  relative furniture-img  ">

                            <Link to="/addProducts">

                                <FeatherIcon icon="arrow-left" color="orange" size="30" className="mr-auto m-2 slideImag absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                            </Link>
                            <div className="mt-56 text-center font-bold ">
                                <p className="text-white border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-500">
                                    BUYNING
                                </span> AND <span className="text-green-200 ">SELLING
                                    </span> <span className="inf">PRODUCTION
                                    </span> </p>
                            </div>
                        </div>
                        <div className="mx-3">
                            <div className="p-4 text-3xl flex items-center inf font-bold text-center">
                                <p className="border-b rounded-xl border-8">ADD YOUR MOBILE PRODUCT
                                </p>
                            </div>
                            <div className="">

                                <div className=" font-bold p-2 w-full  flex">


                                    <input value={username} onChange={(e) => setUsername(e.target.value)} className=" text-sm border text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="UserName:" ></input>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="number" placeholder="Phone-Number:" ></input>
                                </div>
                                <div className="  font-bold p-2 w-full  flex">

                                    <input value={address} onChange={(e) => setAddress(e.target.value)} className="border text-sm  text-gray-600 w-full mx-1 p-3 font-bold" type="text" placeholder="Address:"></input>

                                    <select value={typeOfFurniure} onChange={(e) => setTypeOfFurniure(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="battery" >
                                        <option>TypeOfFurniure</option>


                                        <option>Hoffman Bed Set
                                        </option>
                                        <option>Ferreira Bed
                                        </option>
                                        <option>Foldable Wardrobe</option>
                                        <option>Grace Single Bed</option>


                                        <option>Bretten Single Bed </option>
                                        <option>Darby Single Bed</option>
                                        <option>Millgrove Double Bed</option>
                                        <option>Nigel Double Bed </option>


                                        <option>Arora Towel Stand</option>
                                        <option>Paula Bed Side Table</option>
                                        <option>Paula Bed Side Table</option>
                                        <option>Cliff Bed Side Table</option>


                                        <option>Normani Bed Side Table </option>
                                        <option>Shein Bed Side Table </option>
                                        <option>Howard 4 Door Wardrobe </option>
                                        <option>Hofster 3 Door Wardrobe with </option>
                                        <option>Cherone 6 Door Wardrobe with 3 </option>
                                        <option>Morinari 4 Door Wardrobe with 4 </option>
                                        <option>Sparks Two Door Wardrobe</option>
                                        <option>Sofa 2 seats </option>
                                        <option>Sofa 4 seats </option>
                                        <option>Sofa 8 seats</option>
                                        <option>Sofa 12 seats</option>
                                        <option>chier</option>

                                    </select>
                                    {/* <input value={} onChange={(e) => (e.target.value)} className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Type-Of-Furniture:"></input> */}

                                </div>
                                <div className="  font-bold p-2 full  flex">
                                    <select value={TypeOfWood} onChange={(e) => setTypeOfWood(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full mx-1 p-4 font-bold" type="text" placeholder="battery" >
                                        <option>TypeOfWood</option>


                                        <option>Deodar
                                        </option>
                                        <option>Walnut tree wood
                                        </option>
                                        <option>Teak</option>
                                        <option>Softwood</option>


                                        <option>Chir pine</option>
                                        <option>Fir</option>
                                        <option>Millgrove Double Bed</option>
                                        <option>Hemlock </option>




                                    </select>
                                    {/* <input value={} onChange={(e) => (e.target.value)} className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="TypeOfWood:"></input> */}
                                    {/* <input value={color} onChange={(e) => setColor(e.target.value)} className="border text-sm mx-1 text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Color:" ></input> */}
                                    <select value={color} onChange={(e) => setColor(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder="color" >
                                        <option>Color</option>


                                        <option> Chocolate Brown colour</option>
                                        <option>Coral Pink </option>
                                        <option>Ruby Red gradient</option>
                                        <option>Rose Gold</option>
                                        <option>Lilac Purple </option>
                                        <option>Phantom Green and Phantom Blue </option>
                                        <option>Nebula Purple</option>
                                        <option>Ocean Depths</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Yellow</option>
                                        <option>Alloy orange</option>
                                        <option>White</option>
                                        <option>Almond</option>
                                        <option>Azure (X11/web color)</option>
                                        <option>Baby powder</option>
                                        <option>Banana Mania</option>
                                        <option>Beau blue</option>
                                        <option>Beaver</option>
                                        <option>Black coral</option>
                                        <option>Cosmic latte</option>
                                        <option>Cornsilk</option>
                                        <option>Dark brown</option>
                                        <option>Dark lava</option>
                                        <option>Dark liver (horses)</option>
                                        <option>Fuzzy Wuzzy</option>

                                    </select>
                                </div>


                                <div className="  font-bold p-2 w-full  flex">


                                    <input value={price} onChange={(e) => setPrice(e.target.value)} className="border text-sm text-gray-600 w-1/2 p-3 font-bold" type="text" placeholder="Price:"></input>

                                    {/* <input className="border text-sm mx-1 text-gray-600  w-1/2 p-3 font-bold" type="text" placeholder="Os:" ></input> */}
                                </div>

                                <div className="w-full h-56">

                                    {/* <FeatherIcon Link to="/login" icon="arrow-left" color="gray" size="30" className="mr-auto m-2 absolute bg-white rounded-full slideImag shadow-xl p-2 top-0   " /> */}
                                    {/* <button className="info-bg shadow-2xl info-col p-3 font-bold rounded-md border w-1/2 " onClick={save}>Save</button> */}
                                    <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} className="border border-gray-300 rounded-md w-full h-48 text-sm text-gray-800 p-2" id="story" name="story" placeholder="Funitures-Details "
                                    >

                                    </textarea>
                                </div>
                                <div className="text-center flex ">
                                    <div className="w-full">

                                        <Link to="/furnitureProducts">

                                            <button onClick={save} className="info-bg info-col p-3 font-bold rounded-md border w-full  ">Save</button>
                                        </Link>
                                    </div>
                                    <input onChange={(e) => setImage(e.target.value)} value={image} className="border border-yellow-600 rounded p-3 bg-gray-200" placeholder="Image"></input>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FurnitureForm
