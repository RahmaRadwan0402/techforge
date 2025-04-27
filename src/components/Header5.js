import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const cards = [
  {
    title: "Security First",
    text: "Enterprise-grade security in every solution we deliver",
    img: require('./imgs/4114dea3-c604-4ee7-9b27-8b10226767b8.jpg'),
    imgSize: '90px'
  },
  {
    title: "Quality Assured",
    text: "Rigorous testing and quality control processes",
    img: require('./imgs/e1fe39f3-6785-4a90-9cf5-9a3dec2d1115.jpg'),
    imgSize: '90px'
  },
  {
    title: "Innovation Driven",
    text: "Cutting-edge technologies and modern approaches",
    img: require('./imgs/fc029bc9-569a-4eec-a6b4-85ee6c777db3.jpg'),
    imgSize: '60px'
  }
];

const Header5 = () => {
  return (
    <div style={{ backgroundColor: 'black', paddingTop: '50px', paddingBottom: '40px' }}>
      <h3 style={{ textAlign: 'center', color: 'white', marginBottom: '30px' }}>Why Choose Us</h3>
      <Container>
        <Row className="justify-content-center">
          {cards.map((card, index) => (
            <Col xs={12} sm={10} md={6} lg={4} className="mb-4" key={index}>
              <Card style={{ border: 'none', backgroundColor: 'black', textAlign: 'center' }}>
                <Card.Body>
                  <Card.Title>
                    <img src={card.img} alt={card.title} style={{ width: card.imgSize }} />
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: 'white', fontSize: '20px' }}>{card.title}</p>
                    <p style={{ color: 'white', fontSize: '10px' }}>{card.text}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Header5;
