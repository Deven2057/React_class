import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
        <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg" alt="" className='img'style={{border:"2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.discription}</p>
      
    </div>
  )
}

export default Card
