import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { State } from '../types/main-state';

export type OfferState = {
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: Comment[];
  isOfferLoading: boolean;
  offerError: string | null;
};

const initialState: OfferState = {
  offer: null,
  nearbyOffers: [],
  comments: [],
  isOfferLoading: false,
  offerError: null,
};

export const fetchOfferById = createAsyncThunk<
  Offer,
  string,
  { extra: AxiosInstance; rejectValue: string }
>(
  'offer/fetchOfferById',
  async (id, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Offer>(`/offers/${id}`);
      return data;
    } catch {
      return rejectWithValue('Failed to load offer.');
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<
  Offer[],
  string,
  { extra: AxiosInstance; rejectValue: string }
>(
  'offer/fetchNearbyOffers',
  async (id, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Offer[]>(`/offers/${id}/nearby`);
      return data;
    } catch {
      return rejectWithValue('Failed to load nearby offers.');
    }
  }
);

export const fetchComments = createAsyncThunk<
  Comment[],
  string,
  { extra: AxiosInstance; rejectValue: string }
>(
  'offer/fetchComments',
  async (id, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Comment[]>(`/comments/${id}`);
      return data;
    } catch {
      return rejectWithValue('Failed to load comments.');
    }
  }
);

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    clearOffer(state) {
      state.offer = null;
      state.nearbyOffers = [];
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferById.pending, (state) => {
        state.isOfferLoading = true;
        state.offerError = null;
      })
      .addCase(fetchOfferById.fulfilled, (state, action: PayloadAction<Offer>) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferById.rejected, (state, action) => {
        state.isOfferLoading = false;
        state.offerError = action.payload ?? action.error.message ?? 'Unknown error';
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.comments = action.payload;
      });
  }
});

export const { clearOffer } = offerSlice.actions;

export const selectOffer = (state: State) => state.offer.offer;
export const selectNearbyOffers = (state: State) => state.offer.nearbyOffers;
export const selectComments = (state: State) => state.offer.comments;
export const selectOfferLoading = (state: State) => state.offer.isOfferLoading;
export const selectOfferError = (state: State) => state.offer.offerError;

export default offerSlice.reducer;
