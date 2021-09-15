import React from 'react'
import FeatherIcon from 'feather-icons-react';

function footer() {
    return (
        <div>
            <div className="footer " >
                <div className=" ">
                    <div className=" w-full   flex">
                        <div className="w-1/2  justify-center text-center flex items-center py-8 ">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="mail" color="rgb(226, 98, 13)" />
                            <p className="mx-3">Email</p>
                        </div>
                        <div className="w-1/2 flex  justify-center items-center y-12">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="instagram" color="rgb(226, 98, 13)" />
                            <p className="mx-3">Instegram Us</p>
                        </div>
                        <div className="w-1/2 flex  justify-center items-center py-8">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="trash-2" color="rgb(226, 98, 13)" />
                            <p className="mx-3">About Us</p>
                        </div>
                    </div>
                    <div className=" w-full text-center flex">
                        <div className="w-1/2  justify-center flex items-center py-8">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="phone" color="rgb(226, 98, 13)" />
                            <p className="mx-3">Contect Us</p>
                        </div>
                        <div className="flex w-1/2  justify-center py-8 items-center">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="life-buoy" color="rgb(226, 98, 13)" />
                            <p className="mx-3">Services Us</p>
                        </div>
                        <div className="w-1/2 flex  justify-center items-center  py-8">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="search" color="rgb(226, 98, 13)" />
                            <p className="mx-3" >More Search</p>
                        </div>

                    </div>
                    <div className=" w-full text-center flex">
                        <div className="w-1/2 flex  justify-center items-center py-8">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="map-pin" color="rgb(226, 98, 13)" />
                            <p className="mx-3" >Address</p>
                        </div>
                        <div className="w-1/2  justify-center flex items-center py-8">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="command" color="rgb(226, 98, 13)" />
                            <p className="mx-3">About Us</p>
                        </div>
                        <div className="w-1/2 flex  justify-center items-center py-8">

                            <FeatherIcon className="p-1 border rounded-full bg-gray-200 shadow-xl" className="footer-feather-icon " icon="cpu" color="rgb(226, 98, 13)" />
                            <p className="mx-3">Term and Condition</p>
                        </div>

                    </div>
                    <div className="flex icon-footer  justify-center">
                        <div className="mx-2 my-12">

                            <FeatherIcon className="footer-icon w-12" icon="facebook" color="rgb(226, 98, 13)" />
                        </div>
                        <div className="mx-2 my-12">

                            <FeatherIcon className="footer-icon  w-12" icon="twitter" color="rgb(226, 98, 13)" />
                        </div>
                        <div className="mx-2 my-12">

                            <FeatherIcon className="footer-icon  w-12" icon="youtube" color="rgb(226, 98, 13)" />
                        </div>
                        <div className="mx-2 my-12">

                            <FeatherIcon className="footer-icon  w-12" icon="instagram" color="rgb(226, 98, 13)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
