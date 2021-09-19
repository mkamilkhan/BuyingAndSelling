import React from 'react'
import Header from '../components/header'
import vehicalUser from '../components/vehicalCarts'
import SideBar from '../components/sideBar';
import VehicalCarts from '../components/vehicalCarts';
import SearcHeader from '../components/searcHeader';
function VehicalProducts() {
    return (
        <div>
            <div>


                <div className="">

                    <div className=" ">
                        <SideBar />
                    </div>
                    <div className="">
                        <VehicalCarts />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VehicalProducts
