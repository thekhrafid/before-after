import React from 'react'

const Heading = ({htext, className}) => {
  return (
    <h1 className={`text-[60px] text-white font-bold ${className}`}>{htext}</h1>
  )
}

export default Heading