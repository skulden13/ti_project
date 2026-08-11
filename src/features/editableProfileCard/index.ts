import {
  editableProfileCardActions,
  editableProfileCardReducer,
} from './model/slices/editableProfileCardSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidationErrors }
  from './model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';

import { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
import {
  EditableProfileCardSchema,
  ValidationProfileError,
} from './model/types/editableProfileCardSchema';

export { editableProfileCardActions, editableProfileCardReducer };
export { fetchProfileData };
export {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  getProfileForm,
  updateProfileData,
  EditableProfileCard,
  EditableProfileCardSchema,
  ValidationProfileError,
};
