import React, { useState } from 'react'


const State = () => {
    const [title, setTitle] = useState("Mr")
    const [now, setNow] = useState(1)
    const [job, setJob] = useState("software-developer")

    const coronation = () => {
        setTitle("Chief")
        setNow(4)
        setJob("Baale")

    }
  return (
    <div>
        <h3>
            My name is {title} James, I've {now} wife, I'm a {job}.
        </h3>
        <button onClick={coronation}>Coronation</button>
    </div>
  )
}

export default State