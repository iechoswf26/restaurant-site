import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import MenuPage from "../pages/MenuPage.jsx";
import ReservationsPage from "../pages/ReservationsPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import {Container, Nav, Navbar} from 'react-bootstrap'


export function SiteNavbar(){
    return(
        <Router>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/home">Four Elements Udon</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/menu">Menu</Nav.Link>
                            <Nav.Link href="/reservations">Reservations</Nav.Link>
                            <Nav.Link href="/cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>

            <Container fluid className="mt-4">
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/menu" element={<MenuPage />}/>
                    <Route path="/reservations" element={<ReservationsPage />}/>
                    <Route path="/cart" element={<CartPage />}/>
                </Routes>
            </Container>
        </Router>

    )
}