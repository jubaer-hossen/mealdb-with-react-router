import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Meal from './components/meal/Meal';
import About from './components/about/About';
// import {
//     Button,
//     Container,
//     Form,
//     FormControl,
//     Nav,
//     Navbar,
// } from 'react-bootstrap';
import MealSearch from './components/showMeal/MealSearch';
import NotFound from './components/Not-found/NotFound';

function App() {
    return (
        <div>
            <Router>
                {/* react bootstrap navbar start */}

                {/* <Navbar bg="dark" variant="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/meal">Meal</Nav.Link>
                                <Nav.Link href="/search-meal">
                                    Meal-Search
                                </Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    Search
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> */}
                {/* react bootstrap navbar end  */}

                {/* router nav start */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                        <li className="nav-item">
                            <Link className="nav-link active" exact to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/meal">
                                Meal
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/search-meal">
                                Meal-Search
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link active" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* router nav end  */}

                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/meal">
                        <Meal></Meal>
                    </Route>
                    <Route path="/search-meal">
                        <MealSearch></MealSearch>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route exact path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
