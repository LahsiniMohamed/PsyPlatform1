import React from 'react'
import DoctorBadge from "./DoctorBadge"
import './Preview.scss'
function Preview({info1 , info2 , info3}) {
    return (
        <div className="preview">
            <div className="preview__items">
            <DoctorBadge doctorInfo = {info1}/>
            <DoctorBadge doctorInfo = {info2}/>
            <DoctorBadge doctorInfo = {info3}/>
            </div>
        </div>
    )
}

export default Preview
