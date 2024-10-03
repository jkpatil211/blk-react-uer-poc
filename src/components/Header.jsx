import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BlkIcon from '../assets/blackrock-logo-sitemap.svg'
import { Col, Row } from "react-bootstrap";

const Header = () => {
    let expand = 'xl';
    return (
        <Row style={{boxShadow: "-1px 3px 5px -3px #a5a1a1"}}>
            <Col>
                <Navbar expand={expand} className="bg-body-primary mt-4 pb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
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
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">About us</Nav.Link>
                                    <Nav.Link href="#action2">Funds</Nav.Link>
                                    <Nav.Link href="#action2">Solutions</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header;