import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidationProfileError } from '../../model/types/profile';

const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error(ValidationProfileError.SERVER_ERROR);
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(ValidationProfileError.SERVER_ERROR);
    }
  },
);

export { fetchProfileData };
