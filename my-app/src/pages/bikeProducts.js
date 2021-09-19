import React from 'react'
import BikeCarts from '../components/bikeCarts'
import Header from '../components/header'
import SideBar from '../components/sideBar';
import SearcHeader from '../components/searcHeader';

function BikeProducts() {
    return (
        <div>
            <div>

                <div>

                    <div>
                        <SideBar />
                    </div>
                    <div>
                        <BikeCarts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeProducts
