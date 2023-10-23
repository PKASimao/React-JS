import React from 'react'

export default function Filter({filter,setFilter, setSort}) {
  return (
    <div className='filter'>
        <h2>Filter:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Completa</option>
                    <option value="Incompleted">Incompleta</option>
                </select>
            </div>
            <div>
                <p>Ordem alftabeta</p>
                <button onClick={() => setSort('Asc')}>ASC</button>
                <button onClick={() => setSort('Desc')}>DSC</button>
            </div>
        </div>
      
    </div>
  )
}
