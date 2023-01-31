import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './basketReducer';
import restaurantSlice from './restaurantReducer';

export const store = configureStore({
  reducer: {
    basket: basketReducer, 
    restaurant: restaurantSlice
  },
});