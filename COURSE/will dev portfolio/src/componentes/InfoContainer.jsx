import React from 'react'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../Styles/componentes/infoContainer.sass'

const InfoContainer = () => {
  return (
    <section id='info-container'>
      <div className="info-card">
        <AiFillPhone id='phone-card' />
        <div>
          <h3>
            Telephone
          </h3>
          <p>
            +244 921 858 758
          </p>
        </div>

      </div>

      <div className="info-card">
        <AiOutlineMail id='email-card' />
        <div>
          <h3>
            E-mail
          </h3>
          <p>
            pkasimao@gmail.com
          </p>
        </div>

      </div>

      <div className="info-card">
        <AiFillEnvironment id='location-card' />
        <div>
          <h3>
            Address
          </h3>
          <p>
            Vila Flor, Luanda, Angola
          </p>
        </div>

      </div>
      
    </section>
  )
}

export default InfoContainer
