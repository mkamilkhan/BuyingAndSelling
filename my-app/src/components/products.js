import React from 'react'

function products() {
    return (
        <div>
            <div id="opening" className=" link-Production bg-banner">

                <div className="  text-center">
                    <div className="flex py-12 justify-around w-full text-center ">
                        <p className="btn-link w-64 ">Vehicles</p>
                        <p className="w-64  btn-link">Fashions</p>
                        <p className="w-64 btn-link">Bikes</p>
                    </div>
                    <div className="flex py-16 w-full justify-around text-center ">
                        <p className="w-64  btn-link" >Furniture</p>
                        <p className="w-64  btn-link">Animals</p>
                        <p className="w-64  btn-link">Properties</p>

                    </div>
                    <div className="flex py-16  w-full justify-around text-center ">
                        <p className="w-64  btn-link">Bussines</p>
                        <p className="w-64  btn-link">Jobs</p>
                        <p className="w-64  btn-link">Mobile</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default products
