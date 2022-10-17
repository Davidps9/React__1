
import React, { useState } from 'react'

export const Component2 = () => {
    //let x = 1;
    //let y = 1;
    
    const [x, SetX] = useState (1)
    const [y, SetY] = useState (1)
    const [sign, SetSign] = useState ("+")

    const CambiarX = (x2)=>{
        SetX(x2);
    }
    const CambiarY = (y2)=>{
        SetY(y2);
    }

    const CambiarSign = (sign2)=>{
        SetSign(sign2);
    }
    let z = parseInt(x) + parseInt(y);

    switch(sign){
        case "+":
             z = parseInt(x) + parseInt(y);
            break;
        case "-":
             z = parseInt(x) - parseInt(y);
            break;
        case "/":
            z = parseInt(x) / parseInt(y);
            break;
        
        case "*":
            z = parseInt(x) * parseInt(y);
            break;
        default: 
         z = parseInt(x) + parseInt(y);
        break;

    }
    
  
    
  return (
    <div>
        <h1>Calculadora simple</h1>

        <p>
            Todos sabemos que:<br></br>
            {x} {sign} {y} = {z}
        </p>
        <input type="number" onChange={e => CambiarX(e.target.value)} placeholder="1"/> 
        <input type="text" className='signo' onChange={e => CambiarSign(e.target.value)} onFocus={e =>e.target.value = ""} maxLength="1" placeholder="+"/> 
        <input type="number" onChange={e => CambiarY(e.target.value)} placeholder="1"/>
    </div>
  )
}
