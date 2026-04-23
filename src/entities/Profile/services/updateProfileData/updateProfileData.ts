import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Profile } from '../../model/types/profile';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';

const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());
    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(i18n.t('LoginError'));
    }
  },
);

export { updateProfileData };
