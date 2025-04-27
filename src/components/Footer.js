import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
    <div style={{backgroundColor:'black', gap:'20px',paddingTop:'20px',paddingBottom:'20px',borderTop:'1px solid rgb(63, 63, 99)'}}>
      <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',backgroundColor:'black',padding:'20px'}}>
        <div>
            <p style={{color:'white',fontSize:'14px'}}>TechForge</p>
            <p style={{color:'rgba(245, 245, 245, 0.69)', fontSize:'10px'}}>Transforming businesses through <br/>innovative digital solutions</p>
        </div>
        <div>
            <p style={{color:'white',fontSize:'12px'}}>Services</p>
            <div style={{color:'rgba(245, 245, 245, 0.69)', fontSize:'8px'}}>
            <p>Website Development</p>
            <p>Mobile Apps</p>
            <p>Web Applications</p>
            <p>Digital Marketing</p></div>
        </div>
        <div style={{color:'rgba(245, 245, 245, 0.69)', fontSize:'8px'}}>
            <p style={{color:'white',fontSize:'12px'}}>Company</p>
            <p>About Us</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact </p>
        </div>
        <div style={{color:'rgba(245, 245, 245, 0.69)', fontSize:'13px'}}>
            <p style={{color:'white',fontSize:'12px'}}>Follow Us</p>
            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
      </div>
      <div>
        <p style={{color:'rgba(245, 245, 245, 0.69)',fontSize:'12px',textAlign:'center'}}>© 2024 TechForge. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer;
