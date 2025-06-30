import { createContext } from "react";
import type { Coffe } from "../../models/Coffe";

interface CartContext {
    cartItems: Array<Coffe>,
    addNewItem: (item: Coffe) => void
}

export const CartContext = createContext({} as CartContext)