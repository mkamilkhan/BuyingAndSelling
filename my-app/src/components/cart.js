import React from 'react'
import Assets from '../assets/bmw-sedan.jpeg';

export default function cart() {

    const data = [1, 2, 3, 4, 5, 6, 8, 9, 0, 5, 2, 3, 4, 45]

    return (
        <div>
            <div className="flex flex-wrap" >
                {
                    data.map((res) =>

                        <div className="w-64 shadow-md m-3">
                            <div>

                                <img src={Assets} id="slideImage" className=" rounded"></img>
                            </div>
                            <div className="text-xs py-4 p-3 flex-grow rounded font-bold text-gray-700 border shadow-md">
                                <div className=" justify-between flex">
                                    <p>RS : 2000000</p>
                                    <p>Model: 12</p>
                                </div>


                                <div className=" justify-between flex">
                                    <p>Color: Red</p>

                                    <p>Company: Honda</p>
                                </div>

                                <p>Address: Nowshera</p>
                                <p>Phone: 0336387438</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
