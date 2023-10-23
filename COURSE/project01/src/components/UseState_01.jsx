import React from 'react'
import { useState } from 'react'



export default function HookStates01() {

  const [valor, setValor] = useState(0)

  function diminuir(){
    setValor(v => v-1)
  }

  function aumentar(){
    setValor(v => v+1)
  }



  return (
    <div>
      <h4>useState</h4>
      <p>valor: {valor}</p>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}
