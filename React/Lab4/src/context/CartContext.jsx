// Context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

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