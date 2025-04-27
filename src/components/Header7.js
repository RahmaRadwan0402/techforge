import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Header7 = () => {
  return (
    <Container fluid style={{ backgroundColor: 'black', paddingTop: '50px', paddingBottom: '50px' }}>
      <h3 style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}>Get In Touch</h3>
      <Row className="justify-content-center" style={{ rowGap: '30px' }}>
        <Col xs={12} md={6} lg={5}>
          <Form style={{ backgroundColor: 'rgb(3, 3, 36)', padding: '20px', borderRadius: '8px' }}>
            <p style={{ color: 'white' }}>Send us a message</p>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{ color: 'white', fontSize: '12px' }}>Name</Form.Label>
              <Form.Control
                type="text"
                style={{
                  backgroundColor: 'black',
                  border: '1px solid rgb(63, 63, 99)',
                  color: 'white'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label style={{ color: 'white', fontSize: '12px' }}>Email</Form.Label>
              <Form.Control
                type="email"
                style={{
                  backgroundColor: 'black',
                  border: '1px solid rgb(63, 63, 99)',
                  color: 'white'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label style={{ color: 'white', fontSize: '12px' }}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{
                  backgroundColor: 'black',
                  border: '1px solid rgb(63, 63, 99)',
                  color: 'white'
                }}
              />
            </Form.Group>
            <Button style={{ width: '100%', backgroundColor: 'rgb(33, 120, 252)', border: 'none' }} type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div style={{ color: 'white', paddingTop:'20px' }}>
            <p style={{ fontSize: '17px' }}>Contact Information</p>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faLocationDot} style={{ color: 'rgb(33, 120, 252)' }} />
              <p style={{ fontSize: '12px', margin: 0 }}>123 Tech Street, Silicon Valley, CA 94025</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(33, 120, 252)' }} />
              <p style={{ fontSize: '12px', margin: 0 }}>contact@techforge.com</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faPhone} style={{ color: 'rgb(33, 120, 252)' }} />
              <p style={{ fontSize: '12px', margin: 0 }}>+1 (555) 123-4567</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header7;
