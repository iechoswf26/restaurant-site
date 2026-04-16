import {Container, Nav, Navbar} from 'react-bootstrap'


export const SiteNavbar = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/home">Four Elements Udon</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/reservations">Reservations</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    )
}