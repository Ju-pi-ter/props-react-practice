import React from 'react'

const Advanced = ({name, location, job}) => {
  return (
    <div>
        <h3>
            My name is {name}, I'm the next in line to be {job} in {location}.
        </h3>
    </div>
  )
}

export default Advanced