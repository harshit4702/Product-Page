export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_Products":
      return { ...state, products: action.payload };

    case "Add_Item":
      return { ...state, cart: [...state.cart, { ...action.payload }] };

    case "Remove_Item":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };

    case "Change_quantity":
      return {
        ...state,
        cart: state.cart.map((prod) =>
          prod.id === action.payload.id ? action.payload : prod
        ),
      };

    default:
      break;
  }
};
