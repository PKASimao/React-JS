import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di';

import '../Styles/componentes/TecnoContainer.sass';

const tecnologies=[
  {id: "html", name:"HTML%", icon: <DiHtml5/>},
  {id: "css", name:"CSS3", icon: <DiCss3/>},
  {id: "js", name:"JavaScript", icon: <DiJsBadge/>},
  {id: "node", name:"Node", icon: <DiNodejsSmall/>},
  {id: "mysql", name:"Mysql", icon: <DiMysql/>},
  {id: "react", name:"React", icon: <DiReact/>},
]

const TecnologContainer = () => {
  return (
    <section className='tecno-container'>
      <h2>Tecnologies</h2>
      <div className="tecnology-grid">

        {tecnologies.map((tech) => (
          <div className="tecnology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit, amet cont. ?</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologContainer
