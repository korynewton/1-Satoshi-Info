import React from 'react'

const PriceList = (props) => {
  return (
      <>
        {props.data.map(item => {
            return (
                <div className='dataCountainer'>
                    <div className="countries">
                        <h1>{item.country}</h1>)
                    </div>
                    <div className="price">
                        <h1>{item.price}</h1>
                    </div>
                </div>
            )
            }
      </>
  )
}

export default PriceList
