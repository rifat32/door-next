import { v4 as uuidv4 } from "uuid";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  DELETE_ALL_FROM_CART
} from "../actions/cartActions";

const initState = [];

const cartReducer = (state = initState, action) => {
  const cartItems = state,
    product = action.payload;

  if (action.type === ADD_TO_CART) {
    // for non variant products
    if (product.variation === undefined) {
     
      const cartItem = cartItems.filter((item) => item.id === product.id)[0];
      if (cartItem === undefined) {
        return [
          ...cartItems,
          {
            ...product,
             qty: product.qty ? product.qty : 1,
            // qty: 1,
            cartItemId: uuidv4()
          }
        ];
      } else {
        return cartItems.map((item) =>
          item.cartItemId === cartItem.cartItemId
            ? {
                ...item,
                qty: product.qty
                  ? item.qty + product.qty
                  : item.qty + 1
              }
            : item
        );
      }
      // for variant products
    } else {
     
      const cartItem = cartItems.filter(
        (item) =>
        {
console.log("cart",product,cartItems)
        return   item.id === product.id 
        &&  item.selectedHeight === product.selectedHeight 
        &&  item.selectedProductColor === product.selectedProductColor 
        &&  item.selectedWidth === product.selectedWidth 
        &&  item.price === product.price 
        &&  item.is_hinge_holes === product.is_hinge_holes 
        &&  item.is_custom_size === product.is_custom_size 
        &&  item.is_extra_holes === product.is_extra_holes 
        &&  item.orientation_id === product.orientation_id 
        &&  item.hinge_holes_from_top === product.hinge_holes_from_top 
        &&  item.hinge_holes_from_bottom === product.hinge_holes_from_bottom 
        &&  item.extra_holes_direction_id === product.extra_holes_direction_id 
        &&  item.extra_holes_value === product.extra_holes_value 
        &&  item.is_hinge_holes === product.is_hinge_holes 
        &&  item.custom_height === product.custom_height 
        &&  item.custom_width === product.custom_width 
        }
         
      )[0];



      if (cartItem === undefined) {
        return [
          ...cartItems,
          {
            ...product,
            qty: product.qty ? product.qty : 1,
            cartItemId: uuidv4()
          }
        ];
      } else if (
        cartItem !== undefined &&
        (cartItem.selectedProductColor !== product.selectedProductColor ||
          cartItem.selectedProductSize !== product.selectedProductSize)
      ) {
        return [
          ...cartItems,
          {
            ...product,
            qty: product.qty ? product.qty : 1,
            cartItemId: uuidv4()
          }
        ];
      } else {
        return cartItems.map((item) =>
          item.cartItemId === cartItem.cartItemId
            ? {
                ...item,
                qty: product.qty
                  ? item.qty + product.qty
                  : item.qty + 1,
                selectedProductColor: product.selectedProductColor,
                selectedProductSize: product.selectedProductSize
              }
            : item
        );
      }
    }
  }

  if (action.type === DECREASE_QUANTITY) {
    if (product.qty === 1) {
      const remainingItems = (cartItems, product) =>
        cartItems.filter(
          (cartItem) => cartItem.cartItemId !== product.cartItemId
        );
      return remainingItems(cartItems, product);
    } else {
      return cartItems.map((item) =>
        item.cartItemId === product.cartItemId
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    }
  }

  if (action.type === DELETE_FROM_CART) {
    const remainingItems = (cartItems, product) =>
      cartItems.filter(
        (cartItem) => cartItem.cartItemId !== product.cartItemId
      );
    return remainingItems(cartItems, product);
  }

  if (action.type === DELETE_ALL_FROM_CART) {
    return cartItems.filter((item) => {
      return false;
    });
  }

  return state;
};

export default cartReducer;
