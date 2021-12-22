import React, { createContext, useReducer, useEffect } from "react";
import cartReducer from "./Carts.reducer";

export const CartsContext = createContext();
export const DispatchCartsContext = createContext();

const initialCarts = [];
export function CartsProvider({ children }) {
  const [carts, dispatch] = useReducer(cartReducer, initialCarts);

  return (
    <CartsContext.Provider value={carts}>
      <DispatchCartsContext.Provider value={dispatch}>
        {children}
      </DispatchCartsContext.Provider>
    </CartsContext.Provider>
  );
}
