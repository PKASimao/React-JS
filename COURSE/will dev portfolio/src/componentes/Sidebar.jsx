import React from 'react'

import Avatar from '../img/eu.png';
import '../Styles/componentes/SideBar.sass';
import SociolNetWork from './SociolNetWork';
import InfoContainer from './InfoContainer';






const Sidebar = () => {
  return (
    <aside id='sideBar'>
      <img src={Avatar} alt="Pedro Simao"/>
      <p className='titlte'>Desenvolver</p>
      <SociolNetWork/>
      <InfoContainer/>
      <a href="" className='btn'>
        Download CV
        </a>


    </aside>
  )
}

export default Sidebar
