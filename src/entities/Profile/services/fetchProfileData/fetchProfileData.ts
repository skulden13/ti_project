import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Profile } from '../../model/types/profile';

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

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(i18n.t('LoginError'));
    }
  },
);

export { fetchProfileData };
