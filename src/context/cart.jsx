import { createContext, useState, useEffect } from "react";


export const CartContext = createContext()

/* CartProvider giver context som kan hentes andre steder på siden */
export function CartProvider({children}) {
    /* hvis der er noget i localstorage, gem det array. Ellers, tomt array */
    const [cartItems, setCartItems] = useState(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    );

    /* når side loader gem cartItems fra localStorage */
    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems")
        if (cartItems) {
            setCartItems(JSON.parse(cartItems))
        }
    }, [])

    /* når cartItems opdateres, gem ny array i localstorage */
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    function addToCart(item, size) {
        /* leder efter item som passer til id'et der er givet til funktion */
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id)

        /* hvis dish allerede er der, øg antal med 1. Ellers, tilføj dish til cartItems array*/
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
        /* tjekker efter item */
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id)

        /* hvis antal af item er 1, fjern fra items. Ellers, sænk antal med 1 */
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
        /* samler prisen for hver dish, medregner antal på dish i kurv */
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    /* fjern alt i kurv */
    function clearCart() {
        setCartItems([])
    }

    /* returner funktionerne */
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
