import React from 'react'
import './Faq.css'

function Faq() {
  return (
    <div className="faq">
      
      <h2>Frequently Asked Questions</h2>
        <ul className="accordian">
            <li>
                <input type="radio" name="accordian" className="first"/>
                <label for="first">What is Netflix?</label>
                <div className="contant">
                    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                    <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>

                </div>
            </li>
            <li>
                <input type="radio" name="accordian" className="second"/>
                <label for="second">How much does Netflix cost?</label>
                <div className="contant">
                    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD2.99 to USD9.99 a month. No extra costs, no contracts.</p>
                    
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" className="third"/>
                <label for="third">Where can I wach?</label>
                <div className="contant">
                    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                    <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" className="four"/>
                <label for="four">How do I cancel?</label>
                <div className="contant">
                    <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                   
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" className="five"/>
                <label for="five">What can I watch on Netfix?</label>
                <div className="contant">
                    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                   
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" className="six"/>
                <label for="six">What can I watch on Netfix?</label>
                <div className="contant">
                    <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                    <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                   
                </div>
            </li>
        </ul>

        
        <div className="req">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className="email-signup">
                <input type="email" name="" id="" placeholder="Emai adress" required/>
                <button type="submit">Get Started</button>
            </form>
        </div>


    </div>
  )
}

export default Faq
