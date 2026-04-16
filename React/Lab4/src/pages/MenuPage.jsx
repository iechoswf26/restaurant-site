import MenuItemCard from "../components/MenuItemCard.jsx";
import {menuItems} from "../data/menuData.js";
import {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const MenuPage = () => {

    // Filter menu using useState
    const [filter, setFilter] = useState('All')

    const filteredItems = filter === 'All'
        ?  menuItems
        : menuItems.filter(item => item.category === filter)

    return (
        <div>
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

            {filteredItems.map((item) => {
                return (
                    <MenuItemCard key={item.id} {...item}/>
                )
            })}

        </div>
    )
}

export default MenuPage;