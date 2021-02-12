import React from 'react'
import "./SeanceInfo.scss"
function SeanceInfo({info ,  ...props}) {
    const {price , time} = info
    return (
        <div className = "seanceInfo">
            <h4 className = "seanceInfo__time">{time} min</h4>
            <div className="devider"></div>
            <h4 className = "seanceInfo__price">{price} DH</h4>
        </div>
    )
}

export default SeanceInfo
