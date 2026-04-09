import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {menuItems} from '../data/menuData.js'
import {useContext} from "react";

const MenuItemCard = () => {

    // Filter menu using useState
    const [filter, setFilter] = useState('All')

    const filteredItems = filter === 'All'
        ?  menuItems
        : menuItems.filter(item => item.category === filter)

    // Establish state for Quantity.
    const [quantity, setQuantity] = useState(0)

    const handleChange = (e) => {
        console.log("You clicked the quantity button!")
        setQuantity(e.target.quantity)
    }

    const cartContext = useContext (CartContext)



    return (
        <>
            {/*Dropdown Button for Menu Categories*/}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {filter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setFilter('All')}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Appetizer')}>Appetizer</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Lunch')}>Lunch</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Dinner')}>Dinner</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Drinks')}>Drinks</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>

            {filteredItems.map(({id, name, element, price, category}) => {
                return (
                    <Card key={id}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                            <Card.Text>{element}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            ${price}

                            {/*Quantity Button*/}
                            <Form.Select
                                value={quantity}
                                onChange={handleChange}
                                aria-label="Default select example"
                            >
                                <option>Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>

                            <Button variant="primary">{cartContext}</Button>

                        </Card.Footer>
                    </Card>
                )
            })}

        </>
    )
}

export default MenuItemCard;