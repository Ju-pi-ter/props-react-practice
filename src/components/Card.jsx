import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";

const Card = (props) => {

    
  return (
    <div className="card m-2" style={{width: "18rem"}}>
    <img src={props.picture} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.product}</h5>
      <p className="card-text">{props.price}</p>
      <a href="#/" className="btn btn-primary"><FaCartArrowDown /> Add to cart</a>
    </div>
  </div>
  )
}

export default Card