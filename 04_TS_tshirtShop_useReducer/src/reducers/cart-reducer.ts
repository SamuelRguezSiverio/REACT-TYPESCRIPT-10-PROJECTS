import { db } from '../data/db'
import { CartItem, Tshirt } from '../types'

export type CartActions =
  | { type: 'add-to-cart'; payload: { item: Tshirt } }
  | { type: 'remove-from-cart'; payload: { id: Tshirt['id'] } }
  | { type: 'decrease-quantity'; payload: { id: Tshirt['id'] } }
  | { type: 'increase-quantity'; payload: { id: Tshirt['id'] } }
  | { type: 'clear-cart' }

export type CartState = {
  data: Tshirt[]
  cart: CartItem[]
}

const initialCart = (): CartItem[] => {
  const localStorageCart = localStorage.getItem('cart')
  return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const initialState: CartState = {
  data: db,
  cart: initialCart(),
}

const MAX_ITEMS = 5
const MIN_ITEMS = 1

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === 'add-to-cart') {
    const itemExist = state.cart.find(
      (tshirt) => tshirt.id === action.payload.item.id
    )
    let updatedCart: CartItem[] = []

    if (itemExist) {
      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.item.id) {
          if (item.quantity < MAX_ITEMS) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        } else {
          return item
        }
      })
    } else {
      const newItem: CartItem = { ...action.payload.item, quantity: 1 }
      updatedCart = [...state.cart, newItem]
    }
    return {
      ...state,
      cart: updatedCart,
    }
  }

  if (action.type === 'remove-from-cart') {
    const cart = state.cart.filter((item) => item.id !== action.payload.id)
    return {
      ...state,
      cart,
    }
  }

  if (action.type === 'decrease-quantity') {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })

    return {
      ...state,
      cart,
    }
  }

  if (action.type === 'increase-quantity') {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })

    return {
      ...state,
      cart,
    }
  }

  if (action.type === 'clear-cart') {
    return {
      ...state,
      cart: [],
    }
  }
  return state
}
