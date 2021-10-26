import { Navbar, Nav } from 'react-bootstrap';

const Filters = ()=>{
    return(
        <div className="filter">
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className="speciality">
                        <select>
                            <option>Neurologist</option>
                        </select>
                        </div>
                        <select>
                            <option>Availability</option>
                        </select>
                        <select>
                            <option>Bangalore</option>
                        </select>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Filters;