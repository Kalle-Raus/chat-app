import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTrade } from 'features/trade/tradesSlice';
import messageApi from 'api/messageApi';
import { messageEntity } from 'schemas';
import { normalize } from 'normalizr';

const messageAdapter = createEntityAdapter();

export const updateMessage: any = createAsyncThunk(
  'messages/updateMessage',
  async (data: any, { rejectWithValue }) => {
    try {
      const response: any = await messageApi.messages.update(data);
      const normalized = normalize(response, [messageEntity]);
      return normalized.entities;
    } catch (err) {
      return rejectWithValue(err?.response?.data || 'Something went wrong!');
    }
  }
);

const initialState = messageAdapter.getInitialState({ loading: false, error: null });

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

    builder.addCase(updateMessage.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateMessage.fulfilled, (state, action) => {
      messageAdapter.upsertMany(state, action.payload.messages || {});
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateMessage.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
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
