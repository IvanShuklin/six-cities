import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { OfferDto } from '../types/dto/offer-dto';
import { parseOffers } from '../utils/offer-parser';

type OffersState = {
  items: Offer[];
  isLoading: boolean;
  error: string | null;
};

const initialState: OffersState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchOffers = createAsyncThunk<
  Offer[],
  void,
  { rejectValue: string }
>(
  'offers/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/offers');

      if (!response.ok) {
        return rejectWithValue(`HTTP error: ${response.status}`);
      }

      const dto = (await response.json()) as OfferDto[];

      return parseOffers(dto); // DTO[] → Domain Offer[]
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
);

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Failed to fetch offers';
      });
  },
});

export default offersSlice.reducer;
