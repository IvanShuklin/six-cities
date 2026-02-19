import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES } from '../const/cities';
import { MainState, State } from '../types/state';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { SORTING_OPTIONS, SortOption } from '../const/const';

const initialState: MainState = {
  city: CITIES[0],
  offers: [],
  sortOption: SORTING_OPTIONS.POPULAR,
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
    sortOptionChanged(state, action: PayloadAction<SortOption>) {
      state.sortOption = action.payload;
    },
  },
});

export const { cityChanged, offersLoaded, sortOptionChanged } = mainSlice.actions;

export const selectActiveCity = (state: State) => state.main.city;
export const selectOffers = (state: State) => state.main.offers;
export const selectSortOption = (state: State) => state.main.sortOption;

export default mainSlice.reducer;
