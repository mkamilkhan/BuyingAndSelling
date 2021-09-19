import React from 'react'
import FeatherIcon from 'feather-icons-react';

function searcHeader(props) {
    return (
        <div>
            <div className="">

                <input type="text"
                    onChange={(e) => props.onSearch(e.target.value)}
                    value={props.value} className="dark-cols  desh w-2/3 ml-64   border border-white p-4 desh" placeholder="SEARCH"></input>
            </div>
        </div>
    )
}

export default searcHeader

