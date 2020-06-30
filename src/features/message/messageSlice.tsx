import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchTrade } from 'features/trade/tradesSlice';

const messageAdapter = createEntityAdapter();

const initialState = messageAdapter.getInitialState();

export const messageSlice: any = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrade.fulfilled, (state, action) => {
      messageAdapter.upsertMany(state, action.payload.messages || {});
    });
  },
});

export const {
  selectById: selectMessageById,
  selectIds: selectMessageIds,
  selectEntities: selectMessageEntities,
  selectAll: selectAllMessages,
  selectTotal: selectTotalMessages,
} = messageAdapter.getSelectors((state: any) => state.messages);

export const { reset } = messageSlice.actions;

export default messageSlice.reducer;
