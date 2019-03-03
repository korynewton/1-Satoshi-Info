import React from 'react'

const PriceList = (props) => {
  return (
    <div className="dataContainer">
        <div className="countries">
            {props.prices.country.map(i => <h3>{i}:</h3>)}   
        </div>
        <div className="prices">
            {props.prices.price.map(i => <h3>{i}</h3>)}      
        </div>
    </div>
  )
}

export default PriceList
