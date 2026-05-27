import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Profile, ValidationProfileError } from '../../model/types/profile';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidationProfileError[]>
>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    if (!formData?.id) {
      return rejectWithValue(i18n.t('ProfileIdMissingError', { ns: 'profile' }));
    }

    const errors = validateProfileData(formData);
    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>(`/profile/${formData.id}`, formData);

      if (!response.data) {
        throw new Error(ValidationProfileError.SERVER_ERROR);
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidationProfileError.SERVER_ERROR]);
    }
  },
);

export { updateProfileData };
