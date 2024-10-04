import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BlkIcon from '../../assets/blackrock-logo-sitemap.svg'
import { Col, Row } from "react-bootstrap";

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

const Header = () => {
    let expand = 'xl';
    return (
        <Row style={{boxShadow: "-1px 3px 5px -3px #a5a1a1"}}>
            <Col lg={11} sm={11} xs={11}  className="mx-auto">
                <Navbar expand={expand} className="bg-body-primary mt-4 pb-3">
                    <Container fluid>
                        <Navbar.Brand className="col-2" href="#">
                            <img src={BlkIcon} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={BlkIcon} />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3 menu">
                                    <Nav.Link href="#action1">About us</Nav.Link>
                                    <Nav.Link href="#action2">Funds</Nav.Link>
                                    <Nav.Link href="#action2">Solutions</Nav.Link>
                                </Nav>
                                <div className="searchContainer">
                                    <div className="search-inline-container">
                                        <input className="nav-search" type="text" placeholder="Enter fund or keyword" />
                                        <div className="search-icon">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </div>
                                        
                                    </div>
                                    {/* <div> */}
                                        <FontAwesomeIcon icon={faLocationDot} size="xl" fontWeight="bold"  />
                                    {/* </div> */}
                                    {/* <div> */}
                                        <FontAwesomeIcon icon={faUserCircle} size="xl" fontWeight="bold" />
                                    {/* </div> */}
                                </div>
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header;