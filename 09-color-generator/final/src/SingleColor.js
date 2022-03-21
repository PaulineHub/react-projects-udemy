import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',')
  console.log(bcg);
  return (
<article className={`color`} style={{backgroundColor: `rgb(${bcg})`}}>

  <div className='percent-value'></div>
  <div className='color-value'></div>
</article>
  )
}

export default SingleColor
