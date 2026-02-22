import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CITIES } from '../const/cities';
import { MainState, State } from '../types/state';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus, SORTING_OPTIONS, SortOption } from '../const/const';

const initialState: MainState = {
  city: CITIES[0],
  offers: [],
  sortOption: SORTING_OPTIONS.POPULAR,
  isOffersLoading: false,
  offersError: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const fetchOffers = createAsyncThunk<
  Offer[],
  void,
  { extra: AxiosInstance; rejectValue: string }
>(
  'main/fetchOffers',
  async (_arg, { extra: api, rejectWithValue }) => {
    try {
      const response = await api.get<Offer[]>('/offers');
      return response.data;
    } catch (err) {
      return rejectWithValue('Failed to load offers. Check your connection to the server.');
    }
  }
);

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    cityChanged(state, action: PayloadAction<City>) {
      state.city = action.payload;
    },
    sortOptionChanged(state, action: PayloadAction<SortOption>) {
      state.sortOption = action.payload;
    },
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
        state.offersError = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.isOffersLoading = false;
        state.offersError = (action.payload as string) ?? action.error.message ?? 'Unknown error';
      });
  }
});

export const { cityChanged, sortOptionChanged, requireAuthorization } = mainSlice.actions;

export const selectActiveCity = (state: State) => state.main.city;
export const selectOffers = (state: State) => state.main.offers;
export const selectSortOption = (state: State) => state.main.sortOption;
export const selectOffersLoading = (state: State) => state.main.isOffersLoading;
export const selectOffersError = (state: State) => state.main.offersError;

export default mainSlice.reducer;
