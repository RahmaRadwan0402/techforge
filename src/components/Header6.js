import React from 'react'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const testimonials = [
  {
    name: "John Smith",
    role: "COE, TechStart",
    text: "TechForge delivered beyond our expectations. Their team's expertise and professionals are outstanding.",
    img: require('./imgs/gettyimages-1367909982-612x612.jpg')
  },
  {
    name: "Lisa Chen",
    role: "CTO, Innovation Labs",
    text: "The most reliable development partner we've worked with. They truly understand our business needs.",
    img: require('./imgs/gettyimages-2148975617-612x612.jpg')
  },
  {
    name: "Mike Johnsen",
    role: "Director, Digital Solutions",
    text: "Exceptional service and technical expertise. They helped us transform our digital presence.",
    img: require('./imgs/gettyimages-1427847593-612x612.jpg')
  }
];

const Header6 = () => {
  return (
    <div style={{ backgroundColor: 'rgb(3, 3, 36)', paddingTop: '50px', paddingBottom: '50px' }}>
      <h3 style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}>Client Testimonials</h3>
      <Container>
        <Row className="justify-content-center">
          {testimonials.map((t, index) => (
            <Col xs={12} sm={10} md={6} lg={4} className="mb-4" key={index}>
              <Card style={{ backgroundColor: 'black' }}>
                <Card.Body>
                  <Card.Title style={{ display: 'flex', gap: '3px', paddingBottom: '10px' }}>
                    {Array(5).fill().map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold', fontSize: '11px' }} />
                    ))}
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: 'rgba(245, 245, 245, 0.9)', fontSize: '11px' }}>"{t.text}"</p>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      <img src={t.img} alt={t.name} style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                      <div>
                        <p style={{ color: 'rgba(245, 245, 245, 0.9)', fontSize: '13px', marginBottom: '0' }}>{t.name}</p>
                        <p style={{ color: 'rgba(245, 245, 245, 0.46)', fontSize: '11px' }}>{t.role}</p>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Header6;
