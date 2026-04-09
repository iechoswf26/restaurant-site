import MenuItemCard from "../components/MenuItemCard.jsx";
import {useState} from "react";
import {createContext} from "react";

const MenuPage = () => {

    // Create a context.
    const CartContext = createContext();

    // Create provider component.
    const CartProvider = ({MenuItemCard}) => {
        return <CartContext.Provider value={value}>{MenuItemCard}</CartContext.Provider>
    }

    return (
        <>
            <MenuItemCard/>

        </>
    )
}

export default MenuPage;