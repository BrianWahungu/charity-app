import React from "react";
import fb from './images/fb.png'
import insta from './images/insta.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import './footer.css'

function Footer(){
    return (
        <div className="main-footer">
             <div className="container main-footer-container">
             <h3 className="name">BY GRACES</h3>
             <ul className="nav footer-nav">
                 <li><a href="https://www.facebook.com/"><img src={fb} alt='fb'/></a></li>
                 <li><a href="https://www.instagram.com/"><img src={insta} alt='insta'/></a></li>
                 <li><a href="https://www.youtube.com/"><img src={linkedin} alt='linkedin'/></a></li>
                 <li> <a href="https://twitter.com/"><img src={twitter} alt='twitter'/></a></li>
             </ul>
        </div>
        <p>Images from pixabay by different authors</p>
        </div>
    )
}
export default Footer