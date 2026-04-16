import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from "../context/CartContext.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CartSummary = ({cart}) => {

    const usd = new Intl.NumberFormat(
        "en-US",
        {style: "currency", currency: "USD"}
    )

    const {getTotalPrice} = useCart();
    const subtotal = getTotalPrice();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Cart</Card.Title>
                    <Container>
                        <Row>
                            <Col><strong>Item</strong></Col>
                            <Col><strong>Quantity</strong></Col>
                            <Col><strong>Price</strong></Col>
                            <Col><strong>Line Total</strong></Col>
                        </Row>
                        <hr/>

                        {cart.length ? cart.map((item) => (
                            <Row key={item.id}>
                                <Col>{item.name}</Col>
                                <Col>{item.quantity}</Col>
                                <Col>{usd.format(item.price)}</Col>
                                <Col>{usd.format(item.quantity * item.price)}</Col>
                            </Row>
                        )): <p>Your cart is empty!</p>}
                    </Container>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <ul>
                        <li type="none"><strong>Subtotal: </strong>{usd.format(subtotal)}</li>
                        <li type="none"><strong>Taxes (8%): </strong>{usd.format(tax)}</li>
                        <li type="none"><strong>Total: </strong>{usd.format(total)}</li>
                    </ul>
                </Card.Footer>

            </Card>

        </div>

    )
}

export default CartSummary;