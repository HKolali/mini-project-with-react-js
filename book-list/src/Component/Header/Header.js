import React from 'react'
import "./Header.css"

export default function (props) {

    let headerName = props.title.split(' ')[0]; 
    return (
        <div className='header'>
            <h1 className="header__title">
                <span className='header__name'>{headerName}</span>
                {props.title.slice(headerName.length, props.title.length)}
            </h1>
        </div>
    )
}
