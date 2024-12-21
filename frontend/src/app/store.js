import { configureStore } from '@reduxjs/toolkit'
import  contactDetails  from '../slice/contactDetailsSlice'
import  ProductDetails  from '../slice/ProductDetailsSlice'
import  CartCountSlice  from '../slice/CartCountSlice'

export const store = configureStore({
    reducer: {
        contact : contactDetails,
        products: ProductDetails,
        cartCount:CartCountSlice
       

    },
  })