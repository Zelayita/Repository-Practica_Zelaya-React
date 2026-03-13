import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Boton from'./Components/Boton.jsx'
import Navbar from'./Components/Navbar.jsx'

function App() {
 

  return (
    <>
        <div>
        <Navbar />
        </div>
<div className="mb-2">
        <p className="text-center">EJERCICIO 1 - COMPONENTES - Zelaya  =)</p>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Botones
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show gap2 p-3" data-bs-parent="#accordionExample">
            <Boton
            texto="Boton 1"
              clickHere={() => alert("Has hecho click en Boton 1")}/>
            <Boton texto="Boton 2"
              clickHere={() => alert("Has hecho click en Boton 2")}/>
            <Boton texto="Boton 3"
              clickHere={() => alert("Has hecho click en Boton 3")}/>
            <Boton texto="Boton 4"
              clickHere={() => alert("Has hecho click en Boton 4")}/>
            <Boton texto="Boton 5"
              clickHere={() => alert("Has hecho click en Boton 5")}/>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Cards de Bootstrap
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Mas despues
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
