import React, { useState } from 'react'

const State2 = () => {
    const [nob, setNob] = useState(11);
    const [status, setStatus] = useState("Alive");

    const handleKidnapp = () => {
        setNob(10);
        setStatus('in JAIL')
    }

  return (
    
    <div>
        <p>
        My name is Ben, I've  {nob} brothers and my favourite brother is {status}.
        </p>
        <button onClick={handleKidnapp}>STATUS</button>
        
    </div>
  )
}

export default State2