import CartContext from "./cart.context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {}

  const cartContext = {
    item: [],
    totlaAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider vlaue={cartContext}>
    {props.children}
  </CartContext.Provider>
  );
}


export default CartProvider;



/*
# this component is to manage the current context to data and provide that context to all components that want to access to it 
# we can use this cart provider component to wrap all components thst need to access to the cart

 */