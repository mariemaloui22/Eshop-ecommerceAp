import { useNavigate } from "react-router-dom";

const { createContext, useState } = require("react");

const Cartcontext=createContext();

export const CartContextProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        setCart([...cart,product]);
        alert(`${product?.title} added to cart successfully!`)
    }
    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
      alert(`Product removed from cart successfully!`);
  };
    return (
      <Cartcontext.Provider value={{ cart, setCart, addToCart,removeFromCart }}>
        {children}
      </Cartcontext.Provider>
    );
}

export default Cartcontext;