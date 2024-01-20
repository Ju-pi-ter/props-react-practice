import React from 'react'

const Style = () => {
    const newCss = {
        color: "red",
        fontSize: 70,
        fontWeight: "light",
        textDecoration: "underline",
        textAlign: "center"


    }
  return (
    <div>
        <h1 style={newCss}>I'm a component using style prop</h1>
    </div>
  )
}

export default Style