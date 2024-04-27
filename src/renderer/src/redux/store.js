import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
// import themeModeSlice from "./features/themeSlice";
import globalLoadingSlice from './features/globalLodaingSlice'
import cartSlice from './features/cartSlice'
import productsSlice from './features/products'
// import authModalSlice from "./features/authModelSlice";
// import appStateSlice from "./features/appStateSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    globalLoading: globalLoadingSlice,
    cart: cartSlice,
    products: productsSlice
  }
})

export default store
