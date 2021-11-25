import React from 'react'
import Band from '../components/Band'

export default function Bands({bands, deleteBand}) {
  return(
    <ul>
      {bands.map(band=> <Band key={band.id} band={band} deleteBand={deleteBand}/>)}
    </ul>
  )
}