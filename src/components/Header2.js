import React from 'react'
import Card from 'react-bootstrap/Card';



const Header2 = (props) => {
  return (
    <div style={{backgroundColor:'rgb(3, 3, 36)'}}>
       <div>
        <h3 style={{textAlign:'center',color:'white',paddingTop:'50px',paddingBottom:'50px',}}>Our Services</h3>
      </div>
      <div>
        <div style={{display:'flex',justifyContent:'start',alignItems:'center',gap:'15px'}}>
          <Card style={{ width: '30rem',height:'180px',backgroundColor:'black' }}>
            <Card.Body>
              <Card.Title><img src={require('./imgs/WhatsApp Image 2025-04-22 at 10.16.42 AM.jpeg')} style={{width:'50px'}} alt='' /></Card.Title>
              <Card.Text>
                <p style={{color:'white',fontSize:'14px'}}>Website Development</p>
                <p style={{color:'rgba(245, 245, 245, 0.9)',fontSize:'11px'}}>Custom websties built with modern technologies and best practices</p>
                <p style={{color:'rgb(61, 61, 248)',fontSize:'10px'}}>Learn More</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem',height:'180px',backgroundColor:'black' }}>
            <Card.Body>
              <Card.Title><img src={require('./imgs/WhatsApp Image 2025-04-22 at 10.16.41 AM.jpeg')} style={{width:'40px'}} alt=''/></Card.Title>
              <Card.Text>
                <p style={{color:'white',fontSize:'14px'}}>Mobile App Development</p>
                <p style={{color:'rgba(245, 245, 245, 0.9)',fontSize:'11px'}}>Native and cross-platform mobile aplications</p>
                <p style={{color:'rgb(61, 61, 248)',fontSize:'10px'}}>Learn More</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div><br/>
        <div style={{display:'flex',justifyContent:'start',alignItems:'center',gap:'15px',paddingBottom:'50px'}}>
          <Card style={{  width: '30rem',height:'180px',backgroundColor:'black'}}>
            <Card.Body>
              <Card.Title><img src={require('./imgs/WhatsApp Image 2025-04-22 at 10.16.40 AM.jpeg')} style={{width:'50px'}} alt=''/></Card.Title>
              <Card.Text>
                <p style={{color:'white',fontSize:'14px'}}>Web Applications & Dashboards</p>
                <p style={{color:'rgba(245, 245, 245, 0.9)',fontSize:'11px'}}>Complex web applications with powerful analytics</p>
                <p style={{color:'rgb(61, 61, 248)',fontSize:'10px'}}>Learn More</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '30rem',height:'180px',backgroundColor:'black' }}>
            <Card.Body>
              <Card.Title><img src={require('./imgs/WhatsApp Image 2025-04-22 at 10.16.40 AM (1).jpeg')} style={{width:'50px'}} alt='prop'/></Card.Title>
              <Card.Text>
                <p style={{color:'white',fontSize:'14px'}}>Digital Marketing</p>
                <p style={{color:'rgba(245, 245, 245, 0.9)',fontSize:'11px'}}>Strategic digital marketing solutions for growth</p>
                <p style={{color:'rgb(61, 61, 248)',fontSize:'10px'}}>Learn More</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Header2
