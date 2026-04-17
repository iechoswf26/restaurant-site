import {Card, Button, Form} from 'react-bootstrap';
import {useState} from "react";
import { useCart } from '../context/CartContext.jsx';


const MenuItemCard = (item) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState("1")

    return (
        <div>
            <Card key={item.id} style={{width: '18rem'}}>
                <div>
                    <Card.Img
                        variant="top"
                        src={item.img}
                        alt={item.name}
                        className="object-fit-cover"
                        style={{height: '500px'}}
                    />
                </div>

                <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                    <Card.Text>{item.element}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Form.Select onChange={(e) => setQuantity((e.target.value))} aria-label="quantity">
                        <option>Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                    <Button onClick={() => addToCart(item, quantity)}
                            variant="outline-primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>

    )
}

export default MenuItemCard;
