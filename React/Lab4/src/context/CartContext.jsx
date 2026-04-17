// Context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

/* React Context is used to manage state globally vs passing down props from parent to child.
In this case, global state is applied to the cart and menu.
 */
export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    // Establish state for the cart.
    const [cart, setCart] = useState([]);

    /* useEffect hook performs side effects for the components (e.g. directly updating DOM).
    It accepts 2 arguments - function and dependencies (optional).
     */
    useEffect(() => {

        /* This part of the code only runs once when component mounts (when app first loads). */
        const savedCart = localStorage.getItem('cart'); // Looks for key called 'cart' in browser's built-in storage to return saved cart data.

        if (savedCart) { // If saved cart data exists then...
            try {

                //Convert saved cart data string into JavaScript (array of objects).
                const parsedCart = JSON.parse(savedCart);

                // Ensure Ensures that parsed data is an array.
                if (Array.isArray(parsedCart)) {

                    //If parsed data is an array, update the current state.
                    setCart(parsedCart);
                }

                // If there are challenges with parsing the data, then it will catch the error.
            } catch (error) {
                console.error('Failed to parse cart from localStorage:', error);

                // Any errors with the data are deleted from the local storage, preventing further errors.
                localStorage.removeItem('cart');
            }
        }
    }, []);   // Empty dependency array = runs once.

    // If there are cart items, save them to localStorage. Convert JavaScript to JSON.
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            // Optional: only remove if you really want to clear it.
            // localStorage.removeItem('cart');
        }
    }, [cart]);

    // Function for adding items to cart.
    const addToCart = (item, quantity = 1) => {

        // If quantity
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