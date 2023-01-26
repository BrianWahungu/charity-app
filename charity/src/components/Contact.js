import React from "react";
import fb from './images/fb.png'
import insta from './images/insta.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'

function Contact () {
    return (
<div class="card text-center">
    <div class="card-header">
        <h1><strong>CONTACT US</strong></h1>
    </div>
    <div class="card-body">
        <h5 class="card-title">Telephone:</h5>
        <p class="card-text"><em>+254721345678 / +254722098765</em></p>
        <br></br>
        <h5 class="card-title">Email Address:</h5>
        <p class="card-text"><em>ByGracescharityorganisation@gmail.com</em></p>
        <h5 class="card-title">Location:</h5>
        <p class="card-text"><em>Head Office: 1st Floor Wellington Gables, Upperhill.</em></p>
        <p><em>Nairobi, Kenya</em></p>
        <h5 class="card-title">Social Handles:</h5>
        <p><a href="https://www.facebook.com/"><img src={fb} alt='fb'/></a>
        <a href="https://www.instagram.com/"><img src={insta} alt='insta'/></a>
        <a href="https://www.linkedin.com//"><img src={linkedin} alt='linkedin'/></a>
        <a href="https://twitter.com/"><img src={twitter} alt='twitter'/></a></p>
        
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    </div>
    <div class="card-footer text-muted">
        We are reachable during normal working hours:
        <p>Mon - Fri 8:00 a.m to 5:00 p.m</p>
        <p>Sat & Sun 9:00 a.m to 1:00 p.m</p>
        <p><em>Closed on Public holidays</em></p>
    </div>
</div>
    )
}

export default Contact;