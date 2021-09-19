import React from 'react'
import Header from '../components/header'
import MobileCarts from '../components/mobileCarts'
import SideBar from '../components/sideBar';
import SearcHeader from '../components/searcHeader';
function MobileProducts() {
    return (
        <div>
            <div>
                {/* <Header /> */}
                <div className="">

                    <div className="">
                        <SideBar />
                    </div>
                    <div className="">
                        <MobileCarts />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileProducts
