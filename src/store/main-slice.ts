import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CITIES } from '../const/cities';
import { MainState, State } from '../types/main-state';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import {
  SORTING_OPTIONS,
  SortOption,
  RequestStatus,
} from '../const/const';

const initialState: MainState = {
  city: CITIES[0],
  offers: [],
  sortOption: SORTING_OPTIONS.POPULAR,
  offersLoadingStatus: RequestStatus.Idle,
  offersError: null,
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

export const changeFavoriteStatus = createAsyncThunk<
  Offer,
  { offerId: string; status: boolean },
  { extra: AxiosInstance; rejectValue: string }
>(
  'main/changeFavoriteStatus',
  async ({ offerId, status }, { extra: api, rejectWithValue }) => {
    try {
      const apiStatus = status ? 1 : 0;
      const { data } = await api.post<Offer>(
        `/favorite/${offerId}/${apiStatus}`
      );
      return data;
    } catch {
      return rejectWithValue('Failed to change favorite status.');
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offersLoadingStatus = RequestStatus.Loading;
        state.offersError = null;
      })
      .addCase(
        fetchOffers.fulfilled,
        (state, action) => {
          state.offers = action.payload;
          state.offersLoadingStatus = RequestStatus.Success;
        })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.offersLoadingStatus = RequestStatus.Failed;
        state.offersError =
          action.payload ?? action.error.message ?? 'Unknown error';
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const updatedOffer = action.payload;

        state.offers = state.offers.map((offer) =>
          offer.id === updatedOffer.id ? updatedOffer : offer
        );
      });
  },
});

export const {
  cityChanged,
  sortOptionChanged,
} = mainSlice.actions;

export const selectActiveCity = (state: State) => state.main.city;
export const selectOffers = (state: State) => state.main.offers;
export const selectSortOption = (state: State) => state.main.sortOption;

export const selectOffersLoadingStatus = (state: State) =>
  state.main.offersLoadingStatus;

export const selectOffersError = (state: State) =>
  state.main.offersError;

export const selectFavoritesCount = createSelector(
  [selectOffers],
  (offers) => offers.filter((offer) => offer.isFavorite).length
);

export default mainSlice.reducer;
