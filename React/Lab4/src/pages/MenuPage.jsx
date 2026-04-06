import Dropdown from 'react-bootstrap/Dropdown';
import MenuItemCard from "../components/MenuItemCard.jsx";

const MenuPage = () => {
    return (
        <>
            {/*DropDown button for Menu Categories*/}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Appetizer</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Lunch</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Dinner</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Drinks</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <MenuItemCard/>
        </>
    )
}

export default MenuPage;