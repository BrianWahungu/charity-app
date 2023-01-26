import React from "react";

function Contact () {
    return (
<div class="card text-center">
    <div class="card-header">
        Contact us
    </div>
    <div class="card-body">
        <h5 class="card-title">Telephone</h5>
        <p class="card-text">+254721345678 / +254722098765</p>
        <h5 class="card-title">Email Address</h5>
        <p class="card-text">ByGracescharityorganisation@gmail.com</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    </div>
    <div class="card-footer text-muted">
        We are reachable during normal working hours:
        <ul>
            <li>Mon - Fri 8 a.m to 5 p.m</li>
            <li>Sat & Sun 9 a.m to 1 p.m</li>
            <li><em>Closed on Public holidays</em></li>
        </ul> 
    </div>
</div>
    )
}

export default Contact;