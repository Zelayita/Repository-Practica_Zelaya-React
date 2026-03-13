import React from 'react'

import './Boton.css'

const Boton = ({ texto, clickHere }) => {
  return (
    <button className="boton" onClick={clickHere}>    
        {texto}
    </button>
  )
}   

export default Boton