import React from 'react';
import './Home.css';
import child from './images/child.jpg'
import medical from './images/medical.jpg'
import poverty from './images/poverty.jpg'

function Home(){
 return(
    <div>

         <div className='head'>
             <h1 className='main'>By Graces</h1>
            <center> <p className='main'><em>"The best way to find yourself is to loss yourself in the service of others"</em></p></center>
         </div>

         <div>
            <p className='p1'>Welcome to the XYZ Charity Organization</p>
            <p className='p1'>Our organization is a non-profit dedicated to improving the lives of those in need through various programs and initiatives. We focus on three main areas: education, healthcare and poverty reduction.</p>
         </div>

         <div className='flex-x'>
           <img src={child} alt='child in class' className='inp'/>
           <p className='p3'>In the field of education, we provide scholarships for underprivileged children and young adults, as well as support for schools and educational programs in low-income communities. We believe that education is the key to breaking the cycle of poverty and providing children with the tools they need to succeed in life.</p>        
         </div>

        <div className='flex-y'> 

          <div className='image-y'>      
                <img src={medical} alt='doctor' className='inpq' id='med'/>
          </div>

          <div className='p-y'>
                <p>In the field of healthcare, we provide medical assistance and support to those who cannot afford it. We also run programs to promote health education, disease prevention and healthy living. Our goal is to ensure that everyone has access to the healthcare they need to lead a healthy and fulfilling life.</p>
          </div>

       </div>

        <div className='flex-x'>
            <img src={poverty} alt='poverty' className='inp'/>
            <p className='p3'>In poverty reduction, we provide basic needs assistance such as food, clothing, and shelter for those experiencing poverty. We also work with local organizations and government agencies to help those in need find long-term solutions to poverty.</p>
        </div>

        <p>Our organization is run by a dedicated team of volunteers and staff who are committed to making a real difference in the lives of those we serve. We partner with other organizations and individuals to maximize the impact of our efforts and ensure that every dollar donated goes directly to those in need.</p>
        <p>If you would like to help us in our mission, you can donate to our organization, volunteer your time and skills, or simply spread the word about our organization. Together, we can make a real difference in the world.</p>
        
        <div className="bp" >
          <center>
            <button id='donate' type="button" class="btn btn-outline-warning"> Donate</button>
            <p id="pb"><strong><em>Thank you for visiting our website and for your support.</em></strong></p> 
          </center>
       </div>
          

    </div>
 )
}

export default Home;