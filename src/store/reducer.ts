import { createReducer } from '@reduxjs/toolkit';
import { cityChanged, offersLoaded } from './action';
import { CITIES } from '../const/cities';
import { MainState } from '../types/state';

const initialState: MainState = {
  city: CITIES[0],
  offers: [],
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChanged, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersLoaded, (state, action) => {
      state.offers = action.payload;
    });
});

