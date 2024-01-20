import React from 'react'

const Event = () => {

    const handleClick = () => {
        alert("I've been clicked")
        console.log("I've been clicked")
    }
  return (
    <div>
        <button className='btn btn-primary' onClick={handleClick}>Alert Me</button>
    </div>
  )
}

export default Event