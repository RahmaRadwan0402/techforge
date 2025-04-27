import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const experts = [
  {
    name: "Alexa Morgan",
    role: "Frontend Lead",
    skills: ["React", "VUE", "UI/UX"],
    img: require('./imgs/gettyimages-1443543154-612x612.jpg')
  },
  {
    name: "Sarah Chen",
    role: "Backend Developer",
    skills: ["Node.js", "Python", "AWS"],
    img: require('./imgs/gettyimages-1461077577-612x612.jpg')
  },
  {
    name: "Davida Kim",
    role: "Security Expert",
    skills: ["CyberSecurity", "DevOps"],
    img: require('./imgs/gettyimages-1571704741-612x612.jpg')
  },
  {
    name: "Emma Wilson",
    role: "Digital Marketer",
    skills: ["SEO", "Analytics", "Content"],
    img: require('./imgs/gettyimages-2099403180-612x612.jpg')
  }
];

const Header3 = () => {
  return (
    <div style={{ backgroundColor: 'black', paddingTop: '50px', paddingBottom: '50px' }}>
      <h3 style={{ textAlign: 'center', color: 'white', marginBottom: '30px' }}>Meet Our Experts</h3>
      <Container>
        <Row className="justify-content-center">
          {experts.map((expert, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ backgroundColor: 'black', textAlign: 'center', border: 'none' }}>
                <Card.Img variant="top" src={expert.img} style={{ borderRadius: '50%', width: '120px', height: '120px', margin: 'auto', marginTop: '20px' }} />
                <Card.Body>
                  <Card.Title style={{ color: 'white', fontSize: '14px' }}>{expert.name}</Card.Title>
                  <h4 style={{ color: 'rgb(61, 61, 248)', fontSize: '11px' }}>{expert.role}</h4>
                  <div style={{ color: 'white', fontSize: '10px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    {expert.skills.map((skill, i) => <p key={i} style={{ marginBottom: '0' }}>{skill}</p>)}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Header3;
