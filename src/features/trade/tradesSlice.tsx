import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import { normalize } from 'normalizr';

import { tradeEntity } from 'schemas';
import tradeApi from 'api/tradeApi';

/*
createEntityAdapter API provides a standardized way to store your data in a slice 
by taking a collection and putting it into the shape of { ids: [], entities: {} }.
*/
const tradesAdapter = createEntityAdapter();

export const fetchTrade: any = createAsyncThunk(
  'trades/fetchTrade',
  async (id: string, { rejectWithValue }) => {
    try {
      const response: any = await tradeApi.trades.show(id);

      // Normalize the data so reducers can load a predictable payload, like:
      // `action.payload = { users: {}, trades: {}}`
      const normalized = normalize(response, tradeEntity);
      return normalized.entities;
    } catch (err) {
      return rejectWithValue(err?.response?.data || 'Something went wrong!');
    }
  }
);

export const fetchTrades: any = createAsyncThunk(
  'trades/fetchTrades',
  async (_a, { rejectWithValue }) => {
    try {
      const response: any = await tradeApi.trades.list();
      const normalized = normalize(response, [tradeEntity]);
      return normalized.entities;
    } catch (err) {
      return rejectWithValue(err?.response?.data || 'Something went wrong!');
    }
  }
);

export const updateTrade: any = createAsyncThunk(
  'trades/updateTrade',
  async (data: any, { rejectWithValue }) => {
    try {
      const response: any = await tradeApi.trades.update(data);

      const normalized = normalize(response, tradeEntity);
      return normalized.entities;
    } catch (err) {
      return rejectWithValue(err?.response?.data || 'Something went wrong!');
    }
  }
);

export const removeTrade: any = createAsyncThunk(
  'trades/removeTrade',
  async (id: string, { rejectWithValue }) => {
    try {
      const response: any = await tradeApi.trades.remove(id);
      // const normalized = normalize(response, tradeEntity);
      // return normalized.entities;
      return response;
    } catch (err) {
      return rejectWithValue(err?.response?.data || 'Something went wrong!');
    }
  }
);

/* 
By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
If you want to track 'loading' or other keys, you would initialize them here:
`getInitialState({ loading: false, activeRequestId: null })`
*/
const initialState = tradesAdapter.getInitialState({
  initialLoaded: false,
  loading: false,
  error: null,
});

export const tradeSlice = createSlice({
  name: 'trades',
  initialState: initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrade.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTrade.fulfilled, (state, action) => {
      // Handle the same fetch result by inserting the trades here
      tradesAdapter.upsertMany(state, action.payload.trades || {});
      state.loading = false;
      state.error = null;
      state.initialLoaded = true;
    });
    builder.addCase(fetchTrade.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchTrades.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTrades.fulfilled, (state, action) => {
      // Handle the same fetch result by inserting the trades here
      tradesAdapter.upsertMany(state, action.payload.trades || {});
      state.loading = false;
      state.error = null;
      state.initialLoaded = true;
    });
    builder.addCase(fetchTrades.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(updateTrade.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTrade.fulfilled, (state, action) => {
      tradesAdapter.upsertMany(state, action.payload.trades || {});
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateTrade.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(removeTrade.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeTrade.fulfilled, (state, action) => {
      tradesAdapter.removeOne(state, action.payload.id);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(removeTrade.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const {
  selectById: selectTradeById,
  selectIds: selectTradeIds,
  selectEntities: selectTradeEntities,
  selectAll: selectAllTrades,
  selectTotal: selectTotalTrades,
} = tradesAdapter.getSelectors((state: any) => state.trades);

export const selectMessagesByTradeId = (tradeId: any) =>
  createSelector(
    [
      (state) => selectTradeById(state, tradeId),
      (state: any) => state.messages.ids.map((id: any) => state.messages.entities[id]),
    ],
    (trade: any, messages) => {
      return Object.keys(messages)
        .map((c) => messages[c])
        .filter((message) => trade.messages.includes(message.id));
    }
  );

export const selectUserByTradeId = (tradeId: any, seller: boolean) => {
  const userType = seller === true ? 'seller' : 'buyer';
  return createSelector(
    [
      (state: any) => selectTradeById(state, tradeId),
      (state: any) => state.users.ids.map((id: any) => state.users.entities[id]),
    ],
    (trade: any, users) => {
      return Object.keys(users)
        .map((c) => users[c])
        .find((user) => trade[userType].includes(user.id));
    }
  );
};

export const { reset } = tradeSlice.actions;

export default tradeSlice.reducer;
