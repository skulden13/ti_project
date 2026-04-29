import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export {
  userReducer,
  userActions,
  User,
  UserSchema,
  getUserAuthData,
  getUserMounted,
};
