import { createReducer } from '@reduxjs/toolkit';
import { cityChanged, offersLoaded } from './action';
import { PARIS } from '../mocks/cities';
import { offers } from '../mocks/offers';

const initialState = {
  city: PARIS,
  offers: offers,
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

