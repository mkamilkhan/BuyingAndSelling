import React from 'react'
import Header from '../components/header'
import vehicalUser from '../components/vehicalCarts'
import SideBar from '../components/sideBar';
import VehicalCarts from '../components/vehicalCarts';

function VehicalProducts() {
    return (
        <div>
            <div>
                <Header />

                <div className="flex w-full">

                    <div className="w-64">
                        <SideBar />
                    </div>
                    <div className="mt-32 flex-wrap ml-24">
                        <VehicalCarts />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VehicalProducts
