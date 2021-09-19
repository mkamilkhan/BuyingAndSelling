import React from 'react'
import Header from '../components/header'
import SideBar from '../components/sideBar';
// import BikeCarts from '../components/bikeCarts'
import FurnitureCarts from '../components/furnitureCarts'

function FurnitureProducts() {
    return (
        <div>
            <div>
                <Header />
                <div className="flex w-full">

                    <div className="w-64">
                        <SideBar />
                    </div>
                    <div className="mt-24">
                        <FurnitureCarts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FurnitureProducts
