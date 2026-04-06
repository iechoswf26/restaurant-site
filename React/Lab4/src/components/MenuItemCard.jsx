import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import {menuItems} from '../data/menuData.js'

const MenuItemCard = () => {
    return (
        <>
            {menuItems.map(({id, name, element, price, category}) => {
                return (
                    <Card key={id} style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                            <Card.Text>{element}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            ${price}
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Quantity
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Footer>
                    </Card>
                )
            })}

        </>
    )
}

export default MenuItemCard;