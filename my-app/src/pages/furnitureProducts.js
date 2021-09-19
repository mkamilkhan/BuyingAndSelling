import React from 'react'
import Header from '../components/header'
import SideBar from '../components/sideBar';
// import BikeCarts from '../components/bikeCarts'
import FurnitureCarts from '../components/furnitureCarts'
import SearcHeader from '../components/searcHeader';

function FurnitureProducts() {
    return (
        <div>
            <div>


                <div >

                    <div >
                        <SideBar />
                    </div>
                    <div className="">
                        <FurnitureCarts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FurnitureProducts
