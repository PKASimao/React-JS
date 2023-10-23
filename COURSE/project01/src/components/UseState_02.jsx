import React from 'react'
import { useState } from 'react'



export default function HookStates02() {

  const [valor, setValor] = useState(0)

  function diminuir(){
    setValor(v => v-1)
  }

  function aumentar(){
    setValor(v => v+1)
  }

  function diminuirValor(a){
    setValor(v=>v-a)

  }



  return (
    <div>
      <h4>useState</h4>
      <p>valor: {valor}</p>
      <button onClick={()=>diminuirValor(100)}>Diminuir+</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}
