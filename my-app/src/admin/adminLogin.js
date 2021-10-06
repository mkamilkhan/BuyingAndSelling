import React from 'react'
import { useState, } from 'react'
import FeatherIcon from 'feather-icons-react';

// import FeatherIcon from 'feather-icons-react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link, useHistory
} from "react-router-dom";
import { db, app, } from '../firebaseData'
function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErr] = useState('');
    const [data, setdata] = useState([]);
    const history = useHistory()

    const signin = () => {
        app.auth().signInWithEmailAndPassword(email, password).then((resp) => {
            const data = resp.user.uid
            setdata(data)
            console.log(data, "respose1")
            if (email, password) {
                history.push("/admin")
                console.log(data, "respose2")
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
        <div className="bg-gray-100 font-mono h-screen">
            <div className=" flex justify-center p-32 ">
                <div className=" justify-center p-16  border-yellow-600 rounded  w-1/2">
                    <div className=" text-4xl justify-center  flex my-12 font-bold text-yellow-600 ">
                        {/* <div className="flex items-center">
                            <p className="text-sm text-gray-400" >SIGNUP</p>
                            <Link to="/adminRegister">

                                <FeatherIcon Link to="/login" icon="arrow-left" color="orange" size="35" className="bg-white rounded-full shadow-xl p-2 mx-2  " />
                            </Link>
                        </div> */}

                        <p className=" " >LOGIN</p>
                    </div>

                    <div className=" my-4">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="border-2 border-yellow-600 rounded w-full p-6" placeholder="email"></input>
                        <p className="text-red-500 font-bold">{errors}</p>

                    </div>
                    <div className="">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-2 rounded  border-yellow-600 w-full p-6" placeholder="password"></input>
                    </div>
                    <div className="flex  justify-center">
                        <button type="text" className="border-2 Login-button  rounded border-yellow-600 font-bold text-yellow-600 w-56 p-4 my-6 " onClick={signin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
