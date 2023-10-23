import React from 'react'

export default function Todo({todo, removeTodo, completeTodo}) {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted? "line-through": ""}}>
        <div className="content">
            <p >{todo.text}</p>
            <p className='category'>({todo.category})</p>
        </div>
        <div>
          <button className='complete' onClick={() => completeTodo(todo.id)}>Complete</button>
          <button className='remove' onClick={() => removeTodo(todo.id)}>Delect</button>
        </div>
    </div>
  )
}
