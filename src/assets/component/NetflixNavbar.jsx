import { Container,Navbar,Nav } from "react-bootstrap";
import{Link} from 'react-router-dom'
const NetflixNavbar = function () {
  return (
    <div>
      <Navbar expand="md" className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"  >
        <Container fluid={true}>
          <Navbar.Brand href="#home" className="kids">
            <img className="logo" src="src\assets\image\logo.png"/>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-5">
             
              
              <Link to="/Home" ClassName="Nav.Link">Home</Link>
              <Link to="/TvShow" ClassName="Nav.Link">TV Show</Link>
              <Link to="/Recently Added" ClassName="Nav.Link">Recently Added</Link>
              <Link to="/ My List" ClassName="Nav.Link"> My List</Link>
            
            </Nav>
            <Nav className="flex align-items-center">
            <Nav.Link href="#home"> <i className="bi bi-search icons"></i></Nav.Link>
            <Nav.Link href="#home"> 
              <img className="kids" src="src/assets/image/kids_icon.png"/>
            </Nav.Link>
            <Nav.Link href="#home" > <i className="bi bi-bell icons"></i>
            </Nav.Link>
            <Nav.Link href="#home" > 
            <i className="bi bi-person-circle icons"></i>
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NetflixNavbar;