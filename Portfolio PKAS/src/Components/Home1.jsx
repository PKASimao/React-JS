import React from 'react'
import Eu from '../Image/eu.png'
import CV from '../Image/CV.pdf'
import { FaLinkedinIn, FaInstagram,FaFacebookF,FaGithub} from 'react-icons/fa';
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const socialnet=[
    {nome: "LinkedIn", link: "https://www.linkedin.com/in/pedro-sim%C3%A3o-6144b195/", icon: <FaLinkedinIn/>},
    {nome: "GitHub", link: "https://www.github.com/PKASimao",icon: <FaGithub/>},
    {nome: "Instagram", link: "https://www.instagram.com/pedro_k.a.s/?next=%2F", icon: <FaInstagram/>},
    {nome: "FaceBook", link: "https://www.facebook.com/pedrokamalanduaantonio.simao",icon: <FaFacebookF/>},
    
];

const Home1 = () => {
  return (
    <div id='container'>

        <div className='info'> 
            <img src={Eu} alt="" />
            <div className='info-1'>
                <p>Developer</p>
                <a href={CV} className='btn' target='_black'>
                    Download Resume
                </a>

                <selection id='social-network'>
            {socialnet.map((network) =>(
                <a href={network.link} target='_black' className='social-btn ' id={network.nome} key={network.nome} > 
                    {network.icon}
                </a>

            ))}
      
        </selection>
            </div>
        </div>
        

        

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
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnXdwxdTVqjDlkRPJFPkLspVwXbbJPlGHvxFprgTxtpLBxlZbMRgCJfhBtJbfjhxXbDdbq">pkasimao@gmail.com</a>
               
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
      
    </div>
  )
}

export default Home1
