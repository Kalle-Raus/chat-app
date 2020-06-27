import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// import { userApi } from 'api/userApi';

export const getUser: any = createAsyncThunk('user/getUser', async (_a, { rejectWithValue }) => {
  try {
    // const response = await userApi.getUser();
    const response = { data: {} };
    return response?.data;
  } catch (err) {
    return rejectWithValue(err?.response?.data || 'Something went wrong!');
  }
});

export const updateUser: any = createAsyncThunk(
  'user/updateUser',
  async (data: any, { rejectWithValue }) => {
    try {
      // const response = await userApi.updateUser(data?.id, data?.user);
      const response = { data: {} };
      return response?.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data || 'Something went wrong!');
    }
  }
);

const initialState = { user: {}, loading: false, error: null };

export const userSlice: any = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const userSelector = createSelector(
  (state: any) => state.user,
  (user) => user?.user
);

export const { reset } = userSlice.actions;

export default userSlice.reducer;
