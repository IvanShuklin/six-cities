import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES } from '../const/cities';
import { MainState, State } from '../types/state';
import { City } from '../types/city';
import { Offer } from '../types/offer';

const initialState: MainState = {
  city: CITIES[0],
  offers: [],
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    cityChanged(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    offersLoaded(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
    },
  },
});

export const { cityChanged, offersLoaded } = mainSlice.actions;
export const selectActiveCity = (state: State) => state.main.city;

export default mainSlice.reducer;
