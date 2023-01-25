import React from "react";
import fb from './images/fb.png'
import insta from './images/insta.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'
import './footer.css'

function Footer(){
    return (
        <div className="main-footer">
             <div class="container main-footer-container">
             <h3 class="name">BY GRACES</h3>
             <ul class="nav footer-nav">
                 <li><a href="https://www.facebook.com/"><img src={fb}/></a></li>
                 <li><a href="https://www.instagram.com/"><img src={insta}/></a></li>
                 <li><a href="https://www.youtube.com/"><img src={linkedin}/></a></li>
                 <li> <a href="https://twitter.com/"><img src={twitter}/></a></li>
             </ul>
        </div>
        <p>Images from pixabay by different authors</p>
        </div>
    )
}
export default Footer