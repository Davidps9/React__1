import React, { useState } from 'react'

export const Component1 = () => {
   // let x = 1;
    const [x, SetX] = useState ("Sustituyeme como si fuese tu ex")
    const CambiarX = (x2)=>{
        SetX(x2);
    }
  return (
    <div>
        <h1>{x}</h1>
        <input type="text" onChange={e => CambiarX(e.target.value)}/>

    </div>
  )
}
