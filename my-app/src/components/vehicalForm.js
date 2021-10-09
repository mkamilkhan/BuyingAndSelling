import React from 'react'
import { useState } from 'react'
// import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
// import Assets from '../assets/bike.jpeg';
import { db, app, storage } from '../firebaseData'

function VehicalForm() {
    // const { register, handleSubmit } = useForm()



    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [model, setModel] = useState('');
    const [fuel, setFuel] = useState('');
    const [carname, setCarname] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [details, setDetails] = useState('');
    const [registration, setRegistration] = useState('');
    const [condition, setCondition] = useState('');
    const [kmdvin, setKmdvin] = useState('');
    const [imageUrl, setImageUrl] = useState();




    const save = () => {
        handledata()
        // onchange()
    }
    const handledata = () => {

        db.collection("vihicalUser").add({
            phonenumber: phone,
            username: username,
            addres: address,
            model: model,
            fuel: fuel,
            name: carname,
            color: color,
            details: details,
            registration: registration,
            price: price,
            condition: condition,
            kmdvin: kmdvin,
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
        const storageRef = app.storage().ref('images').child(file.name);
        await storageRef.put(file);
        storageRef.getDownloadURL().then((url) => {
            setImageUrl(url)
        })
    }

    return (

        <div>



            <div className="h-screen">
                <div className="border font-serif m-12 hight-cover flex shadow-2xl  ">
                    <div className="  relative car-img  ">

                        <Link to="/addProducts">

                            <FeatherIcon icon="arrow-left" color="orange" size="30" className="mr-auto m-2 slideImag absolute bg-white rounded-full shadow-xl p-2 top-0   " />
                        </Link>

                        <div className=" mt-56 text-center font-bold ">
                            <p className="text-white border-b-4 border-yellow-500 py-6 mx-12 text-6xl"><span className="text-yellow-700">
                                BUYNING
                            </span> AND <span className="text-red-700">SELLING
                                </span> <span className="inf">PRODUCTION
                                </span> </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-4 text-3xl flex items-center inf font-bold text-center">
                            <p className="border-b rounded-xl border-8">ADD YOUR CAR PRODUCT
                            </p>
                        </div>
                        <div className="mx-3">

                            <div className=" font-bold p-2  justify-between flex">

                                <input value={username} onChange={(e) => setUsername(e.target.value)} className=" text-sm rounded-md border text-gray-600 w-1/2 p-4 font-bold" type="text" placeholder=" UserName:" ></input>
                                <div className="mt-4">

                                    <p className="text-xs text-yellow-500 font-bold">plz wait for</p>
                                    <p className="text-xs text-yellow-500 font-bold"> Load Your image</p>
                                </div>
                                <div className="border border-6 p-1  rounded-full border-yellow-500 ">

                                    <img src={imageUrl} className="w-12  slideImag h-12 rounded-full" />
                                </div>

                            </div>
                            <div className="  font-bold p-2 w-full flex">


                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border rounded-md text-sm text-gray-600  w-1/2 p-4 font-bold" type="number" placeholder=" Phone Number:" ></input>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600 w-1/2 p-4 font-bold" type="text" placeholder=" Address:"></input>
                            </div>

                            <div className="  font-bold p-2  flex">

                                <select value={model} onChange={(e) => setModel(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-full p-4 font-bold" type="text" placeholder=" Model">
                                    <option>Model</option>
                                    <option>1982</option>
                                    <option>1983</option>
                                    <option>1984</option>
                                    <option>1985</option>
                                    <option>1986</option>
                                    <option>1987</option>
                                    <option>1988</option>
                                    <option>1989</option>
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1995</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>


                                </select>

                                <select value={fuel} onChange={(e) => setFuel(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600 w-full p-4 font-bold" type="text" placeholder="Fuel">
                                    <option>fuel</option>
                                    <option>Petrol</option>
                                    <option>Cng</option>
                                    <option>Hybrid</option>

                                </select>

                            </div>

                            <div className="  font-bold p-2 w-full  flex">

                                <select value={carname} onChange={(e) => setCarname(e.target.value)} className="border rounded-md text-sm  text-gray-600 w-1/2 p-4 font-bold" type="text" placeholder="Car name" >
                                    <option>Car name</option>
                                    <option>Toyota Corolla</option>
                                    <option> Suzuki Mehran</option>
                                    <option>Honda City </option>
                                    <option>Honda Civic</option>
                                    <option>Suzuki Ravi</option>
                                    <option> Suzuki Wagon R</option>
                                    <option> Suzuki Cultus</option>
                                    <option> Toyota Hilux</option>
                                    <option> Suzuki Swift</option>

                                </select>

                                <input value={price} onChange={(e) => setPrice(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600 w-1/2 p-4 font-bold" type="text" placeholder="Price" ></input>
                                {/* <input type="file" className="w-1/2 " /> */}

                            </div>
                            <div className="  font-bold p-2  flex">

                                <select value={condition} onChange={(e) => setCondition(e.target.value)} className="border text-sm ml-1  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Condition">
                                    <option>condition</option>
                                    <option>Used</option>
                                    <option>New</option>

                                </select>
                                <input value={kmdvin} onChange={(e) => setKmdvin(e.target.value)} className="border rounded-md text-sm text-gray-600 w-full mx-1 p-4 font-bold" type="text" placeholder="KM's driven:"></input>
                                {/* <input value={make} onChange={(e) => setMake(e.target.value)} className="border rounded-md text-sm ml-1 text-gray-600  w-full p-4 font-bold" type="text" placeholder="Make" ></input> */}

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

                            </div>

                            <div className="  font-bold p-2  flex">
                                <textarea value={details} onChange={(e) => setDetails(e.target.value)} className="border text-sm  rounded-md text-gray-600 w-full p-4 font-bold" type="text" placeholder="Details " className="border w-full p-2 text-sm h-32"></textarea>
                            </div>
                            <div className="w-full  flex  mt-4 ">
                                <Link to="/vehicalProducts" className="w-1/2">

                                    <button onClick={save} className="info-bg p-4 font-bold w-full info-col rounded-md border  ">Save</button>
                                </Link>

                                <input type="file" onChange={onchange} className="border w-1/2 border-yellow-600 rounded p-3 bg-gray-200" placeholder="Image"></input>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default VehicalForm
