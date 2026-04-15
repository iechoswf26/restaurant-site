import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from "../context/CartContext.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartSummary = ({cart}) => {

    if(cart.length === 0) {
        console.log("Your cart is empty")
    }

    const {getTotalPrice} = useCart();

    const subtotal = getTotalPrice();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
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
                    {cart.map((item) => (
                        <Row key={item.id}>
                            <Col>{item.name}</Col>
                            <Col>{item.quantity}</Col>
                            <Col>{item.price}</Col>
                            <Col>${(item.quantity * item.price).toFixed(2)}</Col>
                        </Row>
                    ))}
                </Container>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
                <ul>
                    <li type="none"><strong>Subtotal: </strong>${subtotal.toFixed(2)}</li>
                    <li type="none"><strong>Taxes (8%): </strong>{tax.toFixed(2)}</li>
                    <li type="none"><strong>Total: </strong>${total.toFixed(2)}</li>
                </ul>
            </Card.Footer>

            <button type="submit">Checkout</button>
        </Card>
    )
}

export default CartSummary;