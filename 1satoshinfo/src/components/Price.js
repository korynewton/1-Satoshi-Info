import React from 'react'

function Price(props) {
  return (
    <div className='individualPrice'>
      <h4>{props.obj.price} {props.obj.country}</h4>
    </div>
  )
}

export default Price
