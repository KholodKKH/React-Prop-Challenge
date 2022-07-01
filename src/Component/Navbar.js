// import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, NavDropdown, Nav, Card} from "react-bootstrap";
function NavBar() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Cars.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Cars for Sale</Nav.Link>
              <Nav.Link href="#link">Sell Your Car</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Reviews</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Research
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                 Service
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Repair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;