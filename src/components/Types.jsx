import React from 'react'
import PropTypes from "prop-types"

const Types = ({name, age, status}) => {
  return (
    <div>My name is {name}, I'm {age} years old, my marital status is {status}</div>
  )
}

export default Types

Types.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
}

