import React from 'react'
import BikeCarts from '../components/bikeCarts'
import Header from '../components/header'
import SideBar from '../components/sideBar';
function BikeProducts() {
    return (
        <div>
            <div>

                <Header />


                <div className="flex w-full">

                    <div className="w-64">
                        <SideBar />
                    </div>
                    <div className="mt-32">
                        <BikeCarts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeProducts
