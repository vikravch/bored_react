import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchActivity = createAsyncThunk(
  'activity/fetchActivity',
  async () => {
    const res = await fetch('https://www.boredapi.com/api/activity/');
    const data = await res.json();
    return data;
  },
);

const initialState = {
  activity: {},
  loading: 'idle',
  error: '',
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActivity.fulfilled, (state, action) => {
      state.activity = action.payload;
      state.loading = 'idle';
      state.error = '';
    });
    builder.addCase(fetchActivity.pending, (state) => {
      state.loading = 'load';
      state.error = '';
      state.activity = {};
    });
    builder.addCase(fetchActivity.rejected, (state, action) => {
      state.loading = 'idle';
      state.error = action.payload;
      state.activity = {};
    });
  },
});

export default activitySlice.reducer;
