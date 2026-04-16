import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';

const max_qty_per_item = 5;

export const CartContext = createContext();

const initialState = {
    items: [] //Refers to array of [{id, name, price, quantity}]
}

// Switch statement to restrict quantity per menu item in the cart.
function cartReducer (state, action) {
    switch (action.type) {

        // All cases related to adding items to the cart from menu page.
        case 'ADD_TO_CART': {

            //Searches for an instance of an item (and its name, price, and quantity).
            const {id, name, price, quantity = 1} = action.payload;
            const existingItem = state.items.find (item => item.id === id);

            if (existingItem) {

                // If the quantity of a particular item exists, add to its quantity, and store it as newQuantity.
                const newQuantity = existingItem.quantity + quantity;

                //If the newQuantity exceeds the max allowable quantity of 5 for an item, trigger an alert and return state.
                if (newQuantity > max_qty_per_item) {
                    alert(`Sorry, you can only order a maximum of ${max_qty_per_item} ${name}(s).`)
                    return state;
                }

                // In addition to returning state, set the newQuantity to the previous quantity of that item.
                return {
                    ...state,
                    items: state.items.map(item => item.id === id ? {...item, quantity: newQuantity} : item)
                }

                //If the selected quantity of the item exceeds the maximum allowable quantity, trigger an alert and return state.
            } else {
                if (quantity > max_qty_per_item) {
                    alert(`Maximum of ${max_qty_per_item} per item.`);
                    return state;
                }
            }

            // In addition to returning to state, render the previous state of item quantity.
            return {
                ...state,
                items: [...state.items, {id, name, price, quantity}]
            }
        }

        // All scenarios related to updating the quantity in the cart from cart page.
        case 'UPDATE_QUANTITY': {
            const {id, newQuantity} = action.payload;

            //If the newQuantity of items is less than 1, return to the previous state.
            if (newQuantity < 1) return state;

            //If the newQuantity is greater than the maximum allowable quantity per item, trigger an alert.
            if (newQuantity > max_qty_per_item) {
                alert(`Maximum quantity is ${max_qty_per_item}.`)
                return state;
            }

            // In addition to returning to state, render the item with the previous quantity.
            return {
                ...state,
                items: state.items.map(item => item.id === id ? {...item, quantity: newQuantity} : item
                )
            }
        }

        // When an item is removed from the cart, render the item with the previous state.
        case 'REMOVE_ITEM' : {
            return {
                ...state,
                items: state.items.filter (item => item.id !== action.payload)
            }
        }

        // When the items are cleared from the cart, render an empty array.
        case 'CLEAR_CART' :
            return {items: []}

        default:
            return state;
    }

}

export function CartProvider ({children}) {
    const [state, dispatch]
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load from localStorage ONLY ONCE when the provider mounts
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                }
            } catch (error) {
                console.error('Failed to parse cart from localStorage:', error);
                localStorage.removeItem('cart');
            }
        }
    }, []);   // Empty dependency array = runs once

    // Save to localStorage whenever cart changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            // Optional: only remove if you really want to clear it
            // localStorage.removeItem('cart');
        }
    }, [cart]);

    const addToCart = (item, quantity = 1) => {
        if (quantity < 1) return;

        setCart((prevCart) => {
            const existing = prevCart.find((i) => i.id === item.id);
            if (existing) {
                return prevCart.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const getTotalPrice = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const getTotalItems = () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotalPrice,
                getTotalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};