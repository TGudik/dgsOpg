import { createContext, useState, useEffect } from "react";


export const CartContext = createContext()

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    );

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems")
        if (cartItems) {
            setCartItems(JSON.parse(cartItems))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    function addToCart(item, size) {
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id)

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) => 
                cartItem._id === item._id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
                )
            )
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1}])
        }
    }

    function removeFromCart(item) {
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id)

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id))
        } else {
            setCartItems(
              cartItems.map((cartItem) =>
                cartItem._id === item._id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem,
              ),
            );
        }
    }

    function getCartTotal() {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    function clearCart() {
        setCartItems([])
    }

    return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            removeFromCart,
            getCartTotal,
            clearCart
          }}
        >
            {children}
        </CartContext.Provider>
    )

}
