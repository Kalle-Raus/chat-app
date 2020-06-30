import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchTrade } from 'features/trade/tradesSlice';

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

export const userSlice: any = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrade.fulfilled, (state, action) => {
      userAdapter.upsertMany(state, action.payload.users || {});
    });
  },
});

export const {
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = userAdapter.getSelectors((state: any) => state.users);

export const { reset } = userSlice.actions;

export default userSlice.reducer;
