import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CITIES } from '../const/cities';
import { MainState, State } from '../types/main-state';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import {
  AuthorizationStatus,
  SORTING_OPTIONS,
  SortOption,
  RequestStatus,
} from '../const/const';
import { checkAuth, login } from './api-actions';

const initialState: MainState = {
  city: CITIES[0],
  offers: [],
  sortOption: SORTING_OPTIONS.POPULAR,
  offersLoadingStatus: RequestStatus.Idle,
  offersError: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const fetchOffers = createAsyncThunk<
  Offer[],
  void,
  { extra: AxiosInstance; rejectValue: string }
>('main/fetchOffers', async (_arg, { extra: api, rejectWithValue }) => {
  try {
    const response = await api.get<Offer[]>('/offers');
    return response.data;
  } catch {
    return rejectWithValue(
      'Failed to load offers. Check your connection to the server.'
    );
  }
});

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
        state.offersLoadingStatus = RequestStatus.Loading;
        state.offersError = null;
      })
      .addCase(
        fetchOffers.fulfilled,
        (state, action: PayloadAction<Offer[]>) => {
          state.offers = action.payload;
          state.offersLoadingStatus = RequestStatus.Success;
        }
      )
      .addCase(fetchOffers.rejected, (state, action) => {
        state.offersLoadingStatus = RequestStatus.Failed;
        state.offersError =
          action.payload ?? action.error.message ?? 'Unknown error';
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(login.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const {
  cityChanged,
  sortOptionChanged,
  requireAuthorization
} = mainSlice.actions;

export const selectActiveCity = (state: State) => state.main.city;
export const selectOffers = (state: State) => state.main.offers;
export const selectSortOption = (state: State) => state.main.sortOption;

export const selectOffersLoadingStatus = (state: State) =>
  state.main.offersLoadingStatus;

export const selectOffersError = (state: State) =>
  state.main.offersError;

export const selectAuthorizationStatus = (state: State) =>
  state.main.authorizationStatus;

export default mainSlice.reducer;
