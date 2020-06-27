import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// import { tradeApi } from 'api/tradeApi';

export const getTrade: any = createAsyncThunk('trade/getTrade', async (_a, { rejectWithValue }) => {
  try {
    // const response = await tradeApi.getTrade();
    const response = { data: {} };
    return response?.data;
  } catch (err) {
    return rejectWithValue(err?.response?.data || 'Something went wrong!');
  }
});

export const updateTrade: any = createAsyncThunk(
  'trade/updateTrade',
  async (data: any, { rejectWithValue }) => {
    try {
      // const response = await tradeApi.updateTrade(data?.id, data?.trade);
      const response = { data: {} };
      return response?.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data || 'Something went wrong!');
    }
  }
);

const initialState = { trade: {}, loading: false, error: null };

export const tradeSlice: any = createSlice({
  name: 'trade',
  initialState: initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(getTrade.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTrade.fulfilled, (state, action) => {
      state.trade = action.payload;
      state.loading = false;
    });
    builder.addCase(getTrade.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(updateTrade.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTrade.fulfilled, (state, action) => {
      state.trade = action.payload;
      state.loading = false;
    });
    builder.addCase(updateTrade.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const tradeSelector = createSelector(
  (state: any) => state.trade,
  (trade) => trade?.trade
);

export const { reset } = tradeSlice.actions;

export default tradeSlice.reducer;
