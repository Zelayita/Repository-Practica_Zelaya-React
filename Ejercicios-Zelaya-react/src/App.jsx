import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Boton from'./Components/Boton.jsx'

function App() {
 

  return (
    <>
       <div>
        <Boton
          texto="Aceptar"
          clickHere={() => alert("Has hecho click en aceptar")}
        />
        <Boton
          texto="Cancelar"
          clickHere={() => alert("¿Porque los has cancelado?")}
        />
        <Boton
          texto="Click"
          clickHere={() => alert("Le diste Click")}
        />
        <Boton
          texto="No Click"
          clickHere={() => alert("No le tenia que haber dado click")}
        />
      </div>
      <div>

      </div>
    </>
  )
}

export default App
