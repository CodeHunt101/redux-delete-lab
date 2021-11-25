import React from 'react'

export default function Band({band, deleteBand}) {

  return (
    <li>
      <span>{band.name}</span>
      <button onClick={()=>deleteBand(band.id)}> X</button>

    </li>
  )
}