import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function ReadOnly({rating  , ...props}) {

    return (
        <div className = "readOnly">
            <Rating name="read-only" value={rating} readOnly />
        </div>
    )
}

export default ReadOnly
