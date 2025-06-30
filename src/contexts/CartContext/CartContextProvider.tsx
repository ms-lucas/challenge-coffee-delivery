import { useState, type ReactNode } from 'react'
import { produce } from 'immer'
import type { Coffe } from '../../models/Coffe'
import { CartContext } from './index'

interface CartProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartProviderProps) {

    const [cartItems, setCartItems] = useState<Coffe[]>([])

    function addNewItem(newItem: Coffe) {
        setCartItems(
            (state) => {
                return produce(state, draft => {
                    const itemAlreadyExistisIndex = draft.findIndex(item => item.id === newItem.id)

                    if (itemAlreadyExistisIndex >= 0) {
                        draft[itemAlreadyExistisIndex].quantity += newItem.quantity
                    } else {
                        draft.push(newItem)
                    }

                })
            }
        )
    }

    return (
        <CartContext.Provider value={{ cartItems, addNewItem }}>
            {children}
        </CartContext.Provider>
    )
}