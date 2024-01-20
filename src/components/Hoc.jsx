import React from 'react'

const Hoc = (props) => {
    console.log(props)
  return (
   <React.Fragment>
    <p>
        Hello, my name is {props.name}. I'm a {props.job}.
    </p>
   </React.Fragment>
  )
}

export default Hoc