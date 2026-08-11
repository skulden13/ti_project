import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';

const initialState: EditableProfileCardSchema = {
  readonly: true,
  isLoading: false,
};

export const editableProfileCardSlice = createSlice({
  name: 'editableProfileCard',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.error = undefined;
      state.validationErrors = undefined;
      state.form = { ...state.data };
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.validationErrors = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.validationErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
        state.validationErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validationErrors = action.payload;
      });
  },
});

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
