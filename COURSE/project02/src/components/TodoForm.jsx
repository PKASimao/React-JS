import React from 'react'
import { useState } from 'react'

export default function TodoForm({addTodo}) {
    const[value,setValue] = useState('')
    const[category,setCategory] = useState('');

    const handleSubnit = (e) =>{
        e.preventDefault();

        if(!value || !category) return;

        //add todo
        addTodo(value,category)

        //limpar campos
        setValue('')
        setCategory('')

        console.log(value,category)
        

    }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubnit}>
            <input type="text" placeholder='Digite o Titulo' value={value}  onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessola">Pessola</option>
                <option value="Estudos">Estudos</option>
                <option value="Lazer">Lazer</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
      
    </div>
  )
}
