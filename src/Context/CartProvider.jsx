import { createContext, useState, useEffect } from "react";
const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(null);
    
    return (
        <CartContext.Provider value={({cartItems, setCartItems})}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;