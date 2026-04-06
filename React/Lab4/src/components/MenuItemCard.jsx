import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, {useState} from 'react';
import {menuItems} from '../data/menuData.js'
import {ButtonGroup} from "react-bootstrap";

const MenuItemCard = () => {

    const [filter, setFilter] = useState('All')

    const filteredItems = filter === 'All'
        ?  menuItems
        : menuItems.filter(item => item.category === filter)

    return (
        <>
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

            <div>

            </div>

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
                            <ButtonGroup>
                                <DropdownButton as={ButtonGroup} title="Quantity" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                                    <Dropdown.Item eventKey="5">5</Dropdown.Item>
                                </DropdownButton>

                                <Button>Add to Cart</Button>
                            </ButtonGroup>
                        </Card.Footer>
                    </Card>
                )
            })}

        </>
    )
}

export default MenuItemCard;