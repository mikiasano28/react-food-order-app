import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;

/*
# inside createContext -> defalt data
# after creating context, we will manage this context -> context will change, using useReducer, useState... in a update parts
# 
 */



