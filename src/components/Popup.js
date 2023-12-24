import React from 'react'
import './Popup.css'

const Popup = (props) => {
  return (
    <div className='Popup'>
        <div className="Popup-inner">
            <h1 className="close" onClick={props.onClick}>Close</h1>
        <br />
        <br />
        <center>
            <span className="tick">&#10003;</span>
        </center>
        <h2 className="text2">You have <br />
        Successfully Signed Up!
        </h2>
        </div>
         </div>
  )
}

export default Popup