import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentCart: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    cart_number: 1,
    cart_date: ''
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCurrentCart: (state, action) => {
      const newItem = action.payload
      const existingItem = state.currentCart.items.find((item) => item?.id === newItem?.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.currentCart.items.push({ ...newItem, quantity: 1 })
      }
      state.currentCart.totalItems = state.currentCart.items.reduce(
        (total, item) => total + item.quantity,
        0
      )
      state.currentCart.totalPrice = state.currentCart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    },
    deleteItemById: (state, action) => {
      const id = action.payload
      const newItems = state?.currentCart?.items.filter((item) => item.id != id)
      state.currentCart = { ...state?.currentCart, items: newItems }
      state.currentCart.totalItems = state.currentCart.items.reduce(
        (total, item) => total + item.quantity,
        0
      )
      state.currentCart.totalPrice = state.currentCart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    },
    deleteCurrentCart: (state, action) => {
      state.currentCart = initialState?.currentCart
    }
  }
})

export const { setCurrentCart, deleteCurrentCart, deleteItemById } = cartSlice.actions

export default cartSlice.reducer
