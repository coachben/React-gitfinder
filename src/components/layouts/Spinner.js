import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        //note with arrow functions you could
        //get rid of return if its only one thing below returned. ofcourse it is.
        <div>
            <img src={spinner} alt="Loading..." style={{width: '200px', display: "block", margin: "auto"}}/>
        </div>
            
    )
}

export default Spinner
