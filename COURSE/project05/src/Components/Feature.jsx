import React from 'react'
import './Feature.css'
import Feacture1 from './Images/feature-1.png'
import Feacture2 from './Images/feature-2.png'
import Feacture3 from './Images/feature-3.png'
import Feacture4 from './Images/feature-4.png'

function Feature() {
  return (
    <div className="features-container">

        <div className="features">
            <div className="row">
                <div className="tex-col">
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className="img-col">
                    <img src={Feacture1} alt=""/>
                </div>
            </div>
            
        </div>

        <div className="features">
            
            <div className="row">
                <div className="img-col">
                    <img src={Feacture2} alt=""/>
                </div>
                <div className="tex-col">
                    <h2>Download your shows to watch offline</h2>
                    <p>Save your favorites easily and always have something to watch.</p>
                </div>
            
            </div>
        
        </div>

        <div className="features">
        
            <div className="row">
                
                <div className="tex-col">
                    <h2>Watch everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="img-col">
                    <img src={Feacture3} alt=""/>
                </div>
            
            </div>
            
        </div>

        <div className="features">
            <div class="row">
                <div className="img-col">
                    <img src={Feacture4} alt=""/>
                </div>
                <div className="tex-col">
                    <h2>Create profiles for kids</h2>
                    <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                </div>
            
            </div>
        </div>
      

    </div>
  )
}

export default Feature
