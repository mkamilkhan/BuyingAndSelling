import React from 'react'
import FeatherIcon from 'feather-icons-react';

function searcHeader(props) {
    return (
        <div>
            <div className="flex  justify-center">

                <input type="text"
                    onChange={(e) => props.onSearch(e.target.value)}
                    value={props.value} className="dark-cols desh border-yellow-500 rounded desh w-2/3   border border-white p-4 desh" placeholder="SEARCH"></input>
            </div>
        </div>
    )
}

export default searcHeader

