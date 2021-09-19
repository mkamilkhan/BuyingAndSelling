import React from 'react'
import Header from '../components/header'
import MobileCarts from '../components/mobileCarts'
import SideBar from '../components/sideBar';

function MobileProducts() {
    return (
        <div>
            <div>
                <Header />
                <div className="flex w-full">

                    <div className="w-64">
                        <SideBar />
                    </div>
                    <div className="mt-32">
                        <MobileCarts />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileProducts
