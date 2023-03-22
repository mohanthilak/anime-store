import { useContext } from "react";
import CartContext from "../Context/CartProvider";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
