import React from 'react'

import { Link } from 'react-router-dom'
function button() {
    return (
        <div>
            <div className="mt-12 flex justify-center">

                <div>
                    <Link to="/allProducts">

                        <button type="text" className="btn">BUYNING</button>
                    </Link>
                </div>
                <Link to="/addProducts">

                    <button type="text" className="btn">SELLING</button>
                </Link>
            </div>
        </div>
    )
}

export default button
