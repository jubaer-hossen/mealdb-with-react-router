// import Button from '@restart/ui/esm/Button';
import React from 'react';
// import {
//     Container,
//     Form,
//     FormControl,
//     Nav,
//     Navbar,
//     NavDropdown,
// } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="text-center">
            <h1>Welcome To Meal Db </h1>
            <h3>
                If you want meal Please, click the meal button and find the meal
                you want{' '}
            </h3>
            {/* <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="/meal-db">MEAL-DB</Nav.Link>
                            <Nav.Link to="/about">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Home;
