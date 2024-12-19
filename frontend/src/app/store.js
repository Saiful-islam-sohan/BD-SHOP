import { configureStore } from '@reduxjs/toolkit'
import  contactDetails  from '../slice/contactDetailsSlice'
import  ProductDetails  from '../slice/ProductDetailsSlice'

export const store = configureStore({
    reducer: {
        contact : contactDetails,
        products: ProductDetails,

    },
  })