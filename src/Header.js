import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import "./Header.css";
const Header = () =>{
    return(
        <div>
<Navbar bg="dark" expand="lg">
 <div className="image">
  <Navbar.Brand href="#home">
      <img
        src="/bold.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="B"
      />
      <img
        src="https://images.squarespace-cdn.com/content/v1/56b1a29d7c65e455fe0e87f5/1528990547571-47ZJBVZ22YKQMTTLDM0B/medical.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <img
        src="/d.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="B"
      />
    </Navbar.Brand>
    </div>
    <div className="bod">
    <a href="#home" className="heading">Board of Doctors</a>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <div className="img">
      <Navbar.Brand href="#home">
      <img
        src="/user.png"
        width="25"
        height="25"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    </div>
        <div className="login">
        <select>
                            <option>Login</option>
                        </select>
        </div>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
</div>
    );
};

export default Header;