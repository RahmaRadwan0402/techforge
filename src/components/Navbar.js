import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

  import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'black', height:'50px'}}>
      <Container>
        <Navbar.Brand href="#home"><h6 style={{color:'white'}}>TechForge</h6></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{display:'flex', justifyContent:'space-around', margin:'0 100px'}}>
            <Nav.Link href="#features"><h6 style={{fontSize:'12px',color:'darkgray'}}>Services</h6></Nav.Link>
            <Nav.Link href="#pricing" ><h6 style={{fontSize:'12px',color:'darkgray'}}>About</h6></Nav.Link>
            <Nav.Link href="#pricing"><h6 style={{fontSize:'12px',color:'darkgray'}}>Portfolio</h6></Nav.Link>
            <Nav.Link href="#pricing"><h6 style={{fontSize:'12px',color:'darkgray'}}>Testimonials</h6></Nav.Link>
            <Nav.Link href="#pricing"><h6 style={{fontSize:'12px',color:'darkgray'}}>Contact</h6></Nav.Link>
          </Nav>
          <Nav>
            <button style={{
                backgroundColor:'rgb(33, 120, 252)',
                border:'none',
                color:'white',
                fontSize:'12px',
                height:'27px'}}>Get Started</button>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
