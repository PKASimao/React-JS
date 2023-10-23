import React from 'react'

import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

import '../Styles/componentes/socialnetwork.sass'

const socialnetwork = [
  {name: "Linkedin", icon: <FaLinkedin/>},
  {name: "Github", icon: <FaGithub/>},
  {name: "Instagram", icon: <FaInstagram/>},
];

const SociolNetWork = () => {
  return (
    <section id='social-network'>
      {socialnetwork.map((network) => (
        <a href="#" className='social-btn' id={network.name} key={network.name}>{network.icon}
        </a>
      )
      )}
      
    </section>
  )
}

export default SociolNetWork

