import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserRole, UserSchema } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
import {
  getUserRoles, isAdmin, isManager, isUser,
} from './model/selectors/roleSelectors';

export {
  userReducer,
  userActions,
  User,
  UserRole,
  UserSchema,
  getUserAuthData,
  getUserMounted,
  getUserRoles,
  isAdmin,
  isUser,
  isManager,
};
