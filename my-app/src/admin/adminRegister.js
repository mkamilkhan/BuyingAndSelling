import React from 'react'
import { useState, } from 'react'
import { db, app, } from '../firebaseData'
import FeatherIcon from 'feather-icons-react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link, useHistory
} from "react-router-dom";
function AdminRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErr] = useState('');
    const [data, setdata] = useState([]);
    const history = useHistory()


    const signin = () => {
        app.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
            const data = resp;
            setdata(data)
            console.log(data, "respose1")
            if (email, password) {
                history.push("/adminLogin")
                console.log(data, "respose2")
            }
            else {
                alert("sah")

            }

        }).catch((err) => {
            {
                const error = err.message
                setErr(error)
                console.log(err, "wrong password")
            }
        })
    }



    return (
        <div className="">
            <div>
                <div className="bg-gray-100  font-mono h-screen">
                    <div className=" flex justify-center p-32 ">
                        <div className=" justify-center p-16 items-center border-yellow-600 rounded  w-1/2">
                            <div className=" flex  justify-center text-4xl my-12 font-bold text-yellow-600  text-center">
                                <div className="flex  w-full items-center">
                                    <p className="w-1/4"></p>
                                    <p className="w-full" >SIGNUP</p>
                                    <div className="flex w-1/4  justify-end items-center">

                                        <Link to="/adminLogin">

                                            <FeatherIcon icon="arrow-right" color="orange" size="35" className="bg-white rounded-full shadow-xl p-2 mx-2  " />
                                        </Link>
                                        <p className="text-sm text-gray-400">LOGIN</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" my-4">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="border-2 border-yellow-600 rounded w-full p-6" placeholder="email"></input>
                                <p className="text-red-500 font-bold">{errors}</p>
                            </div>
                            <div className="">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-2 rounded  border-yellow-600 w-full p-6" placeholder="password"></input>
                            </div>
                            <div className="flex justify-center">
                                <button type="text" className="border-2  rounded border-yellow-600 font-bold text-yellow-600 w-56 p-4 my-6 " onClick={signin}>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )

}


export default AdminRegister
