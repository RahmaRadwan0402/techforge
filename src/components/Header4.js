import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Header4 = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'rgb(3, 3, 36)'}}>
      <div>
        <h3 style={{textAlign:'center',color:'white',paddingBottom:'30px',paddingTop:'50px'}}>Featured Projects</h3>
      </div>
      <div>
      <CardGroup style={{gap:'15px',paddingBottom:'50px'}}>
      <Card style={{backgroundColor:'black'}}>
        <Card.Img variant="top" src={require('./imgs/WhatsApp Image 2025-04-21 at 1.46.59 PM (1).jpeg')} style={{width:'300px',borderRadius:'5%'}}/>
        <Card.Body>
          <Card.Title style={{color:'white',fontSize:'14px'}}>E-Commerce Platform</Card.Title>
          <Card.Text>
                <div style={{color:'rgb(61, 61, 248)',fontSize:'10px',display:'flex',gap:'10px'}}>
                <p>React</p>
                <p>Node.js</p>
                <p>MongoDB</p>
            </div>
            <div>
                <p style={{color:'white',fontSize:'11px'}}>Modern e-commerce solution with advanced features</p>
                <p style={{color:'rgb(61, 61, 248)',fontSize:'12px'}}>View Case Study</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor:'black'}}>
        <Card.Img variant="top" src={require('./imgs/WhatsApp Image 2025-04-21 at 1.46.58 PM.jpeg')} style={{width:'300px',borderRadius:'5%'}} />
        <Card.Body>
          <Card.Title style={{color:'white',fontSize:'14px'}}>Healthcare Dashboard</Card.Title>
          <Card.Text>
          <div style={{color:'rgb(61, 61, 248)',fontSize:'12px',display:'flex',gap:'10px'}}>
                <p>Vue</p>
                <p>Python</p>
                <p>PostgreSQL</p>
            </div>
            <div>
                <p style={{color:'white',fontSize:'11px'}}>Analytics dashboard for healthcare providers</p>
                <p style={{color:'rgb(61, 61, 248)',fontSize:'12px'}}>View Case Study</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor:'black'}}>
        <Card.Img variant="top" src={require('./imgs/WhatsApp Image 2025-04-21 at 1.46.59 PM.jpeg')} style={{width:'300px',borderRadius:'5%'}} />
        <Card.Body>
          <Card.Title style={{color:'white',fontSize:'14px'}}>Fitness App</Card.Title>
          <Card.Text>
          <div style={{color:'rgb(61, 61, 248)',fontSize:'10px',display:'flex',gap:'10px'}}>
                <p>React Native</p>
                <p>FireBase</p>
            </div>
            <div>
                <p style={{color:'white',fontSize:'11px'}}>Cross-platform mobile fitness tracking app</p>
                <p style={{color:'rgb(61, 61, 248)',fontSize:'12px'}}>View Case Study</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      </div>
    </div>
  )
}

export default Header4
